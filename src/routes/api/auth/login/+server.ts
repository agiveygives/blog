import { env } from '$env/dynamic/private';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signInWithEmailAndPassword,
	type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase.config';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request, cookies }) => {
	const user = auth.currentUser;
	if (user) {
		return json({});
	}

	const formData = await request.formData();
	const email = formData.get('email') as string | null;
	const password = formData.get('password') as string | null;

	if (!email || !password) {
		throw error(400, 'email and password required.');
	}

	let signInRes: UserCredential;

	try {
		signInRes = await signInWithEmailAndPassword(auth, email, password);
	} catch {
		throw error(401);
	}

	const refreshToken = signInRes.user.refreshToken;
	const accessToken = await signInRes.user.getIdToken();

	cookies.set(
		'accessToken',
		accessToken,
		{
			path: '/',
			secure: env.ENVIRONMENT !== 'development',
			httpOnly: true,
			maxAge: 60 * 55,
				sameSite: 'strict'
		}
	);
	cookies.set(
		'refreshToken',
		refreshToken,
		{
			path: '/',
			secure: env.ENVIRONMENT !== 'development',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 30,
				sameSite: 'strict'
		}
	);

	return json({
		status: 200,
		headers: {
				'cache-control': 'no-store'
		},
});
};

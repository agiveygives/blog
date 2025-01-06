import { env } from '$env/dynamic/private';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signInWithEmailAndPassword,
	type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase.config';

const secure = env.ENVIRONMENT === 'development' ? '' : ' Secure;'

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request }) => {
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

	return json({
		status: 200,
		headers: {
				// Max-age : seconds
				'set-cookie': [
					`accessToken=${accessToken}; Max-Age=${60 * 55}; Path=/;${secure} HttpOnly`,
					`refreshToken=${refreshToken}; Max-Age=${60 * 60 * 24 * 30}; Path=/;${secure} HttpOnly`,
				],
				'cache-control': 'no-store'
		},
});
};

import { json, error, type RequestHandler } from '@sveltejs/kit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.config';

type StsTokenManagerType = {
	accessToken: string;
	refreshToken: string;
	expirationTime: number;
};

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async  ({ request, cookies }) => {
	const formData = await request.formData();
	const email = formData.get('email') as string | null;
	const password = formData.get('password') as string | null;

	if (!email || !password) {
		throw error(400, 'email and password required.');
	}

	const authUser = (await signInWithEmailAndPassword(auth, email, password)).user;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const tokens = authUser.stsTokenManager as StsTokenManagerType;

	cookies.set('access-token', tokens.accessToken, { httpOnly: true });
	cookies.set('refresh-token', tokens.refreshToken, { httpOnly: true });

  return json({ expiration: tokens.expirationTime });
}

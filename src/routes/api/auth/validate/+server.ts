import { env } from '$env/dynamic/private';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signInWithCustomToken,
	type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase.config';

export const GET: RequestHandler = async ({ cookies }) => {
	const user = auth.currentUser;

	if (user) {
		return json({});
	}

	const refreshToken = cookies.get('refreshToken');
	const accessToken = cookies.get('accessToken');

	if (!refreshToken) { throw error(401); }

	let signInRes: UserCredential;

	try {
		signInRes = await signInWithCustomToken(auth, accessToken);
	} catch {
		try {
			signInRes = await signInWithCustomToken(auth, refreshToken);
		} catch {
			throw error(401);
		}
	}

	if (signInRes.user) {
		const newAccessToken = await signInRes.user.getIdToken();

		cookies.set(
			'accessToken',
			newAccessToken,
			{
				path: '/',
				secure: env.ENVIRONMENT !== 'development',
				httpOnly: true,
				maxAge: 60 * 55
			}
		);
		cookies.set(
			'refreshToken',
			refreshToken,
			{
				path: '/',
				secure: env.ENVIRONMENT !== 'development',
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 30
			}
		);

		return json({
			status: 200,
			headers: {
				'cache-control': 'no-store',
			},
		});
	}

	cookies.delete('accessToken');
	cookies.delete('refreshToken');

	throw error(401);
};

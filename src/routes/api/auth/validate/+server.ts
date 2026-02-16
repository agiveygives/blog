import { env } from '$env/dynamic/private';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signOut,
	signInWithCustomToken,
	type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase.config';

export const GET: RequestHandler = async ({ cookies }) => {
	const refreshToken = cookies.get('refreshToken');
	const accessToken = cookies.get('accessToken');

	if (!refreshToken) {
		await signOut(auth);
		cookies.delete('session');
		cookies.delete('accessToken', { path: '/' });
		cookies.delete('refreshToken', { path: '/' });
		throw error(401);
	}

	let signInRes: UserCredential;

	try {
		if (accessToken) {
			signInRes = await signInWithCustomToken(auth, accessToken);
		} else {
			signInRes = await signInWithCustomToken(auth, refreshToken);
		}
	} catch {
		cookies.delete('session');
		cookies.delete('accessToken', { path: '/' });
		cookies.delete('refreshToken', { path: '/' });
		throw error(401);
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
				'cache-control': 'no-store',
			},
		});
	}

	cookies.delete('session');
	cookies.delete('accessToken', { path: '/' });
	cookies.delete('refreshToken', { path: '/' });

	throw error(401);
};

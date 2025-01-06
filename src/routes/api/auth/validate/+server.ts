import { env } from '$env/dynamic/private';
import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signInWithCustomToken,
	type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase.config';

const secure = env.ENVIRONMENT === 'development' ? '' : ' Secure;'
import * as cookie from 'cookie'

export const GET: RequestHandler = async ({ request }) => {
	const user = auth.currentUser;

	if (user) {
		return json({});
	}

	const { refreshToken, accessToken } = cookie.parse(request.headers.get('cookie') || '');

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

		return json({
			status: 200,
			headers: {
				'set-cookie': [
					`accessToken=${newAccessToken}; Max-Age=${60 * 55}; Path=/;${secure} HttpOnly`,
					`refreshToken=${refreshToken}; Max-Age=${60 * 60 * 24 * 30}; Path=/;${secure} HttpOnly`,
				],
				'cache-control': 'no-store',
			},
		});
	}

	throw error(401);
};

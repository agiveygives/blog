import { redirect, type RequestHandler } from '@sveltejs/kit';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase.config';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const location = url.searchParams.get('redirect') ?? '/';

	await signOut(auth);

	cookies.delete('accessToken', { path: '/' });
	cookies.delete('refreshToken', { path: '/' });

	throw redirect(307, location);
};

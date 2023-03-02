import { redirect, type RequestHandler } from '@sveltejs/kit';
import { signOut } from "firebase/auth";
import { auth } from '@/firebase.config';

export const GET: RequestHandler = async  ({ url }) => {
	const location = url.searchParams.get('redirect') ?? '/';

	await signOut(auth);

	throw redirect(307, location);
}

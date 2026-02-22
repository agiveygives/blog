import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { auth } from '@/firebase.config';

export const protectedRoute = async (location = '/', locals: RequestEvent['locals']) => {
	const user = locals.user;

	if (!user) {
		throw redirect(307, location);
	}
};

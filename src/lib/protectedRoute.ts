import { redirect } from '@sveltejs/kit';
import { auth } from '@/firebase.config';

export const protectedRoute = async (location = '/') => {
	const user = auth.currentUser;

	if (!user) {
		throw redirect(307, location);
	}
};

import { json, error, type RequestHandler } from '@sveltejs/kit';
import { auth } from '@/firebase.config';

export const GET: RequestHandler = async () => {
	const user = auth.currentUser;

	if (!user) {
		throw error(401);
	}

	return json({});
};

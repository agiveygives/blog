import { json, error, type RequestHandler } from '@sveltejs/kit';
import {
	signInWithEmailAndPassword,
	setPersistence,
	browserSessionPersistence
} from 'firebase/auth';
import { auth } from '@/firebase.config';

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

	try {
		await setPersistence(auth, browserSessionPersistence);
		await signInWithEmailAndPassword(auth, email, password);
	} catch {
		throw error(401);
	}

	return json({});
};

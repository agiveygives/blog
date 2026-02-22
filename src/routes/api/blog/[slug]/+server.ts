import { json, error, type RequestHandler } from '@sveltejs/kit';
import { db } from '@/firebase-admin.config';
import { verifySession } from '@/lib/verifySession.server';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request, params, cookies }) => {
	const session = cookies.get('session') || '';
	const decodedToken = await verifySession(session);
	if (!decodedToken) {
		throw error(401, 'Unauthorized');
	}

	const now = new Date().toUTCString();
	let blogId = '';

	try {
		blogId = params.slug || '';

		if (!blogId) {
			throw error(400, 'blogId is required');
		}

		const data = await request.json();

		const docRef = db.doc(`blogs/${params.slug}`);
		await docRef.set(
			{
				...data,
				updatedAt: now
			},
			{ merge: true }
		);
	} catch (err) {
		console.log(error);
		throw error(500);
	}

	return json({ id: blogId });
};

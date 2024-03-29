import { json, error, type RequestHandler } from '@sveltejs/kit';
import { setDoc, doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/firebase.config';

export const POST: RequestHandler = async ({ request }) => {
	const newBlogId = uuidv4();
	const now = new Date().toUTCString();

	try {
		const data = await request.json();

		await setDoc(doc(db, 'blogs', newBlogId), {
			...data,
			createdAt: now,
			updatedAt: now
		});
	} catch (err) {
		console.log(error);
		throw error(500);
	}

	return json({ id: newBlogId });
};

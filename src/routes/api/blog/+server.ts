import { json, error, type RequestHandler } from '@sveltejs/kit';
import { collection, query, orderBy, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase.config';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request }) => {
	let newBlogId = '';
	const now = (new Date()).toUTCString();

	try {
		const data = await request.json();

		const blogsRef = collection(db, 'blogs');
		const q = query(blogsRef, orderBy('createdAt', 'desc'));
		const blogsData = await getDocs(q);

		newBlogId = `${blogsData.size + 1}`;

		await setDoc(doc(db, 'blogs', newBlogId), {
			...data,
			createdAt: now,
			updatedAt: now,
		});
	} catch (err) {
		console.log(error);
		throw error(500);
	}

	return json({ id: newBlogId });
};

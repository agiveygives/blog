import type { PageServerLoad } from './$types'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/firebase.config';

type BlogDocType = {
	id: string;
	title: string;
	authors: string;
	description: string;
	tags: string[];
	publishedAt: string;
	createdAt: string;
	updatedAt: string;
	content: string;
};

export const load: PageServerLoad = async ({ locals }) => {
	const blogs: BlogDocType[] = [];

	const blogsRef = collection(db, 'blogs');
	let blogsQuery;

	if (locals.user) {
		blogsQuery = query(blogsRef, orderBy('createdAt', 'desc'));
	} else {
		blogsQuery = query(blogsRef, where('draft', '==', false), orderBy('createdAt', 'desc'));
	}

	const blogsData = await getDocs(blogsQuery);

	blogsData.forEach((doc) => {
		blogs.push({ ...(doc.data() as BlogDocType), id: doc.id });
	});

	blogs.sort((a, b) => (
		(a.publishedAt || a.createdAt) < (b.publishedAt || b.createdAt) ? -1 : 1
	))

	return { blogs, loggedIn: !!locals.user };
};

import { redirect } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';

type ParamsType = {
	slug: string;
};

type BlogDocType = {
	title: string;
	authors: string;
	description: string;
	tags: string[];
	publishedAt: string;
	createdAt: string;
	updatedAt: string;
	content: string;
};

export const load: Load<ParamsType> = async ({ params }) => {
	let blogData;
	try {
		blogData = (await getDoc(doc(db, 'blogs', params.slug))).data() as BlogDocType;

		if (!blogData) {
			throw new Error('Blog does not exist');
		}
	} catch (error) {
		console.log(error);
		throw redirect(307, '/blog');
	}

	const { title, authors, content, description, tags, createdAt, updatedAt, publishedAt } = blogData;

	return {
		title,
		description,
		tags,
		authors,
		publishedAt,
		createdAt,
		updatedAt,
		content
	};
};

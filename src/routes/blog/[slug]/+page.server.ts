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
	createdAt: string;
	updatedAt: string;
	content: string;
};

export const load: Load<ParamsType> = async ({ params, fetch }) => {
	let blogData;
	try {
		blogData = (await getDoc(doc(db, 'blogs', params.slug))).data() as BlogDocType;

		if (!blogData) {
			throw new Error('Blog does not exist');
		}

		const response = await fetch('/api/markdown', {
			method: 'post',
			body: JSON.stringify({ markdown: blogData.content })
		});
		blogData.content = (await response.json())?.mdx;
	} catch(error) {
		console.log(error);
		throw redirect(307, '/blog');
	}

	const {
		title,
		authors,
		content,
		description,
		tags,
		createdAt,
		updatedAt,
	} = blogData;

	return {
		title,
		description,
		tags,
		authors,
		createdAt,
		updatedAt,
		content
	};
};

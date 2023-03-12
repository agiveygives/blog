import { redirect } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';
import type BlogType from '@/types/blogType';

type ParamsType = {
	slug: string;
};

export const load: Load<ParamsType> = async ({ params }) => {
	let blogData;
	try {
		blogData = (await getDoc(doc(db, 'blogs', params.slug))).data() as BlogType;

		if (!blogData) {
			throw new Error('Blog does not exist');
		}
	} catch (error) {
		console.log(error);
		throw redirect(307, '/blog');
	}

	const { title, authors, content, description, tags, createdAt, updatedAt } = blogData;

	return {
		blogData: {
			title,
			description,
			tags,
			authors,
			createdAt,
			updatedAt,
			content,
		},
		blogId: params.slug,
	};
};

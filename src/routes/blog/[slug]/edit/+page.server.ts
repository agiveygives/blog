import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';
import { protectedRoute } from '@/lib/protectedRoute';
import type BlogType from '@/types/blogType';

type ParamsType = {
	slug: string;
};

export const load: ServerLoad<ParamsType> = async ({ params, locals }) => {
	await protectedRoute(`/blog/${params.slug}`, locals);

	let blogData: BlogType;
	try {
		blogData = (await getDoc(doc(db, 'blogs', params.slug))).data() as BlogType;

		if (!blogData) {
			throw new Error('Blog does not exist');
		}
	} catch (error) {
		console.log(error);
		throw redirect(307, '/blog');
	}

	const { title, authors, content, description, tags, createdAt, updatedAt, publishedAt } = blogData;

	return {
		blogData: {
			title,
			description,
			tags,
			authors,
			publishedAt,
			createdAt,
			updatedAt,
			content
		},
		blogId: params.slug
	};
};

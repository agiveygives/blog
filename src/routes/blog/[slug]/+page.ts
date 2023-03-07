import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.config';

type ParamsType = {
	slug: string;
};

type BlogDocType = {
	metadata: {
		title: string;
		description: string;
		labels: string[];
		createdAt: string;
		updatedAt: string;
	},
	content: string;
}

export const load = async ({ params }: { params: ParamsType }) => {
	let blogData;
	try {
		blogData = (await getDoc(doc(db, "blogs", params.slug))).data() as BlogDocType;

		if (!blogData) {
			throw new Error('Blog does not exist');
		}
	} catch {
		throw redirect(307, '/blog');
	}

	const { title, createdAt, updatedAt, description, labels } = blogData.metadata
	const content = blogData.content;

	return {
		title,
		description,
		labels,
		createdAt,
		updatedAt,
		content,
	};
};

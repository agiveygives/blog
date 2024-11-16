import type { Load } from '@sveltejs/kit';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { auth, db } from '@/firebase.config';

type ProjectType = {
	id: string;
	title: string;
	demoUrl: string;
	description: string;
	githubRepo: string;
	imageUrl: string;
	techStack: string[];
};

export const load: Load = async () => {
	const portfolio: ProjectType[] = [];

	const portfolioRef = collection(db, 'portfolio');

	const portfolioQuery = query(portfolioRef, orderBy('title', 'desc'));


	const portfolioData = await getDocs(portfolioQuery);

	portfolioData.forEach((doc) => {
		portfolio.push({ ...(doc.data() as ProjectType), id: doc.id });
	});

	return { portfolio };
};

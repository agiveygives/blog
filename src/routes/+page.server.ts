import { error } from '@sveltejs/kit';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from '@/firebase.config';

type RoleType = {
	title: string;
	timeline: string;
	duties: string[];
};

type ExperienceType = {
	company: string;
	location: string;
	roles: RoleType[];
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const experienceRef = collection(db, 'experience');
	const q = query(experienceRef, orderBy("startDate", 'desc'));

	const experienceData = await getDocs(q);

	const companies: ExperienceType[] = []

	experienceData.forEach((doc) => {
		const docData = doc.data();

		const companyData = {
			company: docData.company,
			location: docData.location,
			roles: docData.roles,
		};

		companies.push(companyData);
	});

  if (companies.length) {
    return { companies };
  }

  throw error(404, 'Not found');
}

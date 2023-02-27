import { readable } from 'svelte/store';
import { firebaseConfig } from '@/firebase.config';
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

type FirebaseStoreType = {
	app: FirebaseApp;
	analytics: Analytics;
	db: Firestore;
	auth: Auth;
}

export const firebase = readable<FirebaseStoreType | null>(null, (set) => {
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const db = getFirestore(app);
	const auth = getAuth(app);

	set({
		app,
		analytics,
		db,
		auth,
	});
});

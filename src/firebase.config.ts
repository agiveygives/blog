import { env } from '$env/dynamic/private';
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: env.VITE_APP_FIREBASE_API_KEY,
	authDomain: env.VITE_APP_FIREBASE_AUTH_DOMAIN,
	projectId: env.VITE_APP_FIREBASE_PROJECT_ID,
	storageBucket: env.VITE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.VITE_APP_FIREBASE_APP_ID,
	measurementId: env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
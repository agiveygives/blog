import { env } from '$env/dynamic/private';

export const firebaseConfig = {
	apiKey: env.VITE_APP_FIREBASE_API_KEY,
	authDomain: env.VITE_APP_FIREBASE_AUTH_DOMAIN,
	projectId: env.VITE_APP_FIREBASE_PROJECT_ID,
	storageBucket: env.VITE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.VITE_APP_FIREBASE_APP_ID,
	measurementId: env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

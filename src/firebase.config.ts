import { env } from '$env/dynamic/private';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
	apiKey: env.SECRET_FIREBASE_API_KEY,
	authDomain: env.SECRET_FIREBASE_AUTH_DOMAIN,
	projectId: env.SECRET_FIREBASE_PROJECT_ID,
	storageBucket: env.SECRET_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.SECRET_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.SECRET_FIREBASE_APP_ID,
	measurementId: env.SECRET_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await setPersistence(auth, browserLocalPersistence);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app);

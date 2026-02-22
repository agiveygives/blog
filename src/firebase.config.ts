import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = JSON.parse(PUBLIC_FIREBASE_CONFIG);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
await setPersistence(auth, inMemoryPersistence)
// export const analytics = getAnalytics(app);
export const storage = getStorage(app);

import { SECRET_FIREBASE_SERVICE_ACCOUNT } from '$env/static/private';
import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

export const firebaseServiceAccount = JSON.parse(SECRET_FIREBASE_SERVICE_ACCOUNT)

export const adminApp = initializeApp({
	credential: admin.credential.cert(firebaseServiceAccount),
});
export const adminAuth = getAuth(adminApp);
export const db = getFirestore(adminApp);

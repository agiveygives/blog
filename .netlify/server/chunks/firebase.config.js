import { b as private_env } from "./shared-server.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: private_env.SECRET_FIREBASE_API_KEY,
  authDomain: private_env.SECRET_FIREBASE_AUTH_DOMAIN,
  projectId: private_env.SECRET_FIREBASE_PROJECT_ID,
  storageBucket: private_env.SECRET_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: private_env.SECRET_FIREBASE_MESSAGING_SENDER_ID,
  appId: private_env.SECRET_FIREBASE_APP_ID,
  measurementId: private_env.SECRET_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
getStorage(app);
export {
  auth as a,
  db as d
};

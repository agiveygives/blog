import { e as error } from "../../chunks/index.js";
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";
import { b as private_env } from "../../chunks/shared-server.js";
import { initializeApp } from "firebase/app";
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
async function load() {
  const experienceRef = collection(db, "experience");
  const q = query(experienceRef, orderBy("startDate", "desc"));
  const experienceData = await getDocs(q);
  const companies = [];
  experienceData.forEach((doc) => {
    const docData = doc.data();
    const companyData = {
      company: docData.company,
      location: docData.location,
      roles: docData.roles
    };
    companies.push(companyData);
  });
  if (companies.length) {
    return { companies };
  }
  throw error(404, "Not found");
}
export {
  load
};

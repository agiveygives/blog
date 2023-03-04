import { e as error } from "../../chunks/index.js";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { d as db } from "../../chunks/firebase.config.js";
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

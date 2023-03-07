import { e as error, r as redirect } from "../../../../chunks/index.js";
import { collection, query, orderBy, getDocs, setDoc, doc } from "firebase/firestore";
import { d as db } from "../../../../chunks/firebase.config.js";
const POST = async ({ request }) => {
  let newBlogId = "";
  try {
    const data = await request.json();
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, orderBy("createdAt", "desc"));
    const blogsData = await getDocs(q);
    newBlogId = `${blogsData.size + 1}`;
    await setDoc(doc(db, "blogs", newBlogId), data);
  } catch (err) {
    console.log(error);
    throw error(500);
  }
  throw redirect(307, `/blog/${newBlogId}`);
};
export {
  POST
};

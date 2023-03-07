import { r as redirect } from "../../../../chunks/index.js";
import { getDoc, doc } from "firebase/firestore";
import { d as db } from "../../../../chunks/firebase.config.js";
const load = async ({ params }) => {
  let blogData;
  try {
    blogData = (await getDoc(doc(db, "blogs", params.slug))).data();
    if (!blogData) {
      throw new Error("Blog does not exist");
    }
  } catch {
    throw redirect(307, "/blog");
  }
  const { title, createdAt, updatedAt, description, labels } = blogData.metadata;
  const content = blogData.content;
  return {
    title,
    description,
    labels,
    createdAt,
    updatedAt,
    content
  };
};
export {
  load
};

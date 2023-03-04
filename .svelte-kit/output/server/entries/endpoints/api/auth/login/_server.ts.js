import { j as json, e as error } from "../../../../../chunks/index.js";
import { setPersistence, browserSessionPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { a as auth } from "../../../../../chunks/firebase.config.js";
const POST = async ({ request }) => {
  const user = auth.currentUser;
  if (user) {
    return json({});
  }
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    throw error(400, "email and password required.");
  }
  try {
    await setPersistence(auth, browserSessionPersistence);
    await signInWithEmailAndPassword(auth, email, password);
  } catch {
    throw error(401);
  }
  return json({});
};
export {
  POST
};

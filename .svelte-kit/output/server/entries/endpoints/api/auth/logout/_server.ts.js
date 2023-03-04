import { r as redirect } from "../../../../../chunks/index.js";
import { signOut } from "firebase/auth";
import { a as auth } from "../../../../../chunks/firebase.config.js";
const GET = async ({ url }) => {
  const location = url.searchParams.get("redirect") ?? "/";
  await signOut(auth);
  throw redirect(307, location);
};
export {
  GET
};

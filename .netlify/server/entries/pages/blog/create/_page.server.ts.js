import { r as redirect } from "../../../../chunks/index.js";
import { a as auth } from "../../../../chunks/firebase.config.js";
const protectedRoute = async (location = "/") => {
  const user = auth.currentUser;
  if (!user) {
    throw redirect(307, location);
  }
};
const load = async () => {
  await protectedRoute("/blog");
};
export {
  load
};

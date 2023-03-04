import { e as error, j as json } from "../../../../../chunks/index.js";
import { a as auth } from "../../../../../chunks/firebase.config.js";
const GET = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw error(401);
  }
  return json({});
};
export {
  GET
};

import { r as redirect } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  let post;
  try {
    post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../../../blogs/${params.slug}.md`);
  } catch {
    throw redirect(307, "/blog");
  }
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
};
export {
  load
};

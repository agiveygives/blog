import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { e as error, j as json } from "../../../../chunks/index.js";
const POST = async ({ request }) => {
  let data;
  let compiledMarkdown;
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  try {
    data = await request.json();
    compiledMarkdown = purify.sanitize(marked.parse(data.markdown));
  } catch (err) {
    console.log(error);
    throw error(500);
  }
  return json({ mdx: compiledMarkdown });
};
export {
  POST
};

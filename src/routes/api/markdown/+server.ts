import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { json, error, type RequestHandler } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request }) => {
	let data;
	let compiledMarkdown;

	const window = new JSDOM('').window;
	// eslint-disable-next-line
	// @ts-ignore
	const purify = DOMPurify(window);

	try {
		data = await request.json();
		compiledMarkdown = purify.sanitize(marked.parse(data.markdown));
	} catch(err) {
		console.log(error);
		throw error(500);
	}

	return json({ mdx: compiledMarkdown });
}

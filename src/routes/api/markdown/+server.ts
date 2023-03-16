import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import markdownIt from 'markdown-it';
import mdiHighlightJs from 'markdown-it-highlightjs';
import mdiEmoji from 'markdown-it-emoji';
import mdiTable from 'markdown-it-multimd-table';
import mdiFootnote from 'markdown-it-footnote';
import { json, error, type RequestHandler } from '@sveltejs/kit';

const md = new markdownIt({
	html: true,
	breaks: true,
	linkify: true,
	typographer:  true,
})
	.use(mdiHighlightJs)
	.use(mdiEmoji)
	.use(mdiTable)
	.use(mdiFootnote)

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
		compiledMarkdown = purify.sanitize(md.render(data.markdown));
	} catch (err) {
		console.log(error);
		throw error(500);
	}

	return json({ mdx: compiledMarkdown });
};

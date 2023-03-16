<script lang='ts'>
	export let markdown: string = '';

	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import markdownIt from 'markdown-it';
	import mdiHighlightJs from 'markdown-it-highlightjs';
	import mdiEmoji from 'markdown-it-emoji';
	import mdiTable from 'markdown-it-multimd-table';
	import mdiFootnote from 'markdown-it-footnote';
	import hljs from 'highlight.js';
	import hljsSvelte from 'highlightjs-svelte';

	hljsSvelte(hljs);

	const md = new markdownIt({
		html: true,
		breaks: true,
		linkify: true,
		typographer:  true,
		highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
	})
		.use(mdiEmoji)
		.use(mdiTable)
		.use(mdiFootnote)

	let compiledMarkdown = '<div class="loading">Loading...</div>';
	let purify;


	onMount(() => {
		purify = DOMPurify(window);
	});

	$: if (purify) {
		compiledMarkdown = purify.sanitize(md.render(markdown))
	}
</script>

<div class="markdown">{@html compiledMarkdown}</div>

<style>
	.markdown {
		padding: 20px;
		border-radius: 5px;
		border: solid 1px var(--mint);
	}

	.markdown :global(pre > code) {
		color: #bababa;
		background-color: #2d2d2d;
    border-radius: 10px;
	}
</style>
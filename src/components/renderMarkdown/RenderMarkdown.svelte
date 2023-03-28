<script lang="ts">
	export let markdown: string = '';

	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import markdownIt from 'markdown-it';
	import mdiEmoji from 'markdown-it-emoji';
	import mdiTable from 'markdown-it-multimd-table';
	import mdiFootnote from 'markdown-it-footnote';
	import mdiHighlightJs from 'markdown-it-highlightjs';
	import mdiAbbr from 'markdown-it-abbr';
	import mdiContainer from 'markdown-it-container';
	import mdiDefList from 'markdown-it-deflist';
	import mdiIns from 'markdown-it-ins';
	import mdiMark from 'markdown-it-mark';
	import mdiSub from 'markdown-it-sub';
	import mdiSup from 'markdown-it-sup';

	const md = new markdownIt({
		html: true,
		breaks: true,
		linkify: true,
		typographer: true
	})
		.use(mdiHighlightJs)
		.use(mdiEmoji)
		.use(mdiTable)
		.use(mdiFootnote)
		.use(mdiAbbr)
		.use(mdiContainer, 'info')
		.use(mdiDefList)
		.use(mdiIns)
		.use(mdiMark)
		.use(mdiSub)
		.use(mdiSup);

	let compiledMarkdown = '<div class="centered"><div class="loading" /></div>';
	let purify;

	onMount(() => {
		purify = DOMPurify(window);
	});

	$: if (purify) {
		compiledMarkdown = purify.sanitize(md.render(markdown));
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
	}

	.markdown :global(pre) {
		color: #bababa;
		background-color: #2d2d2d;
		padding: 10px;
		border-radius: 10px;
		white-space: break-spaces;
	}

	.markdown :global(table) {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
		border-spacing: 1px;
	}

	.markdown :global(td),
	.markdown :global(th) {
		border: 1px solid var(--white);
		padding: 8px;
	}

	.markdown :global(tr:nth-child(even)) {
		background-color: #e3e3e3;
	}

	.markdown :global(tr:hover) {
		background-color: #ddd;
	}

	.markdown :global(th) {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: var(--mint);
		color: var(--white);
	}

	.markdown :global(.info) {
		background-color: lightblue;
		padding: 10px;
		border-radius: 10px;
	}
</style>

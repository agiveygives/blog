<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
	import markdownData from '@/components/markdownInput/store';
	import Button from '@/components/button';
	import Popover from '@/components/popover';
	import { clickOutside } from '@/directives/onClickOutside';
	import hljs from 'highlight.js';
	interface Props {
		textareaRef: HTMLElement;
		text?: string;
	}

	let { textareaRef, text = '' }: Props = $props();

	let languages = $derived((() => {
		const langs = hljs.listLanguages();
		langs.push('svelte');
		return langs.sort();
	})());

	let languageFilter = $state('');
	let filteredLanguages = $derived(languages);
	$effect(() => {
		if (languageFilter.length > 0) {
			filteredLanguages = languages.filter((language) => language.includes(languageFilter.toLowerCase()))
		} else {
			filteredLanguages = languages;
		}
	});

	let headingPopoverVisible = $state(false);
	const closeHeadingPopover = () => {
		headingPopoverVisible = false;
	};
	const toggleHeadingPopover = () => {
		headingPopoverVisible = !headingPopoverVisible;
	};

	let codeBlockPopoverVisible = $state(false);
	const closeCodeBlockPopover = () => {
		codeBlockPopoverVisible = false;
	};
	const toggleCodeBlockPopover = () => {
		codeBlockPopoverVisible = !codeBlockPopoverVisible;
	};

	const applyStringModifier = (startModifier: string, endModifier: string, callback?: () => void) => {
		console.log(textareaRef.selectionStart, textareaRef.selectionEnd);

		if (textareaRef.selectionStart >= -1) {
			var startPos = textareaRef.selectionStart;
			var endPos = textareaRef.selectionEnd;

			const modifiedMarkdown = text.substring(0, startPos) +
			startModifier +
			text.substring(startPos, endPos) +
			endModifier +
			text.substring(endPos, text.length)

			console.log('Controls.applyStringModifier -> updating content (len)', modifiedMarkdown.length);

			markdownData.update((data) => {
				const same = data.content === modifiedMarkdown;
				if (same) {
					console.log('Controls.applyStringModifier -> new content same as store, skipping');
					return data;
				}
				console.log('Controls.applyStringModifier -> performing store update');
				return {
					...data,
					content: modifiedMarkdown
				};
			});
		}

		callback && callback();

		textareaRef.focus();
	};

	const applyLineModifier = (startModifier: string, callback?: () => void) => {
		applyStringModifier(`${startModifier} `, '', callback)
	};

	const applyCodeBlock = (language: string = '') => {
		applyStringModifier(`\`\`\`${language}\n`, "\n```", closeCodeBlockPopover);
	};
</script>

<div class="container">
	<Button variant="ghost" on:click={() => applyStringModifier('*', '*')}>bold</Button>
	<Button variant="ghost" on:click={() => applyStringModifier('_', '_')}>italic</Button>
	<Button variant="ghost" on:click={() => applyStringModifier('`', '`')}>monospaced</Button>
	<div use:clickOutside onclick_outside={closeCodeBlockPopover}>
		<Button variant="ghost" on:click={toggleCodeBlockPopover}>
			code block <Fa icon={faCaretDown} />
		</Button>
		<Popover show={codeBlockPopoverVisible}>
			<div class='popover-options'>
				<input type="text" placeholder="language" bind:value={languageFilter} />
				<button onclick={() => applyCodeBlock()}><h3>text</h3></button>
				{#each filteredLanguages as language}
					<button onclick={() => applyCodeBlock(language.toLowerCase())}><h3>{language}</h3></button>
				{/each}
			</div>
		</Popover>
	</div>

	<div use:clickOutside onclick_outside={closeHeadingPopover}>
		<Button variant="ghost" on:click={toggleHeadingPopover}>
			Heading <Fa icon={faCaretDown} />
		</Button>
		<Popover show={headingPopoverVisible}>
			<div class='popover-options'>
				<button onclick={() => applyLineModifier('#', closeHeadingPopover)}><h1>Heading 1</h1></button>
				<button onclick={() => applyLineModifier('##', closeHeadingPopover)}><h2>Heading 2</h2></button>
				<button onclick={() => applyLineModifier('###', closeHeadingPopover)}><h3>Heading 3</h3></button>
				<button onclick={() => applyLineModifier('####', closeHeadingPopover)}><h4>Heading 4</h4></button>
				<button onclick={() => applyLineModifier('#####', closeHeadingPopover)}><h5>Heading 5</h5></button>
			</div>
		</Popover>
	</div>
</div>

<style>
	.container {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		width: 100%;
		gap: 5px;
	}

	button {
		padding: 5px 10px;
		border: 1px solid #f0f0f0;
		border-radius: 5px;
		background: transparent;
		cursor: pointer;
		transition: transform 0.5s ease-in-out;
	}

	button:hover {
		border-color: #000;
	}

	.popover-options {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		max-height: 50vh;
		overflow-y: auto;
	}

	.popover-options input {
		padding: 5px;
		border: 1px solid #f0f0f0;
		border-radius: 5px;
	}

	.popover-options button {
		color: var(--caribbean-current);
	}
	.popover-options button:hover {
		border-color: var(--caribbean-current);
	}

	h1, h2, h3, h4, h5 {
		margin: 0;
	}
</style>

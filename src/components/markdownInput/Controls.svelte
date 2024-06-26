<script lang="ts">
	export let textareaRef: HTMLElement
	export let text: string = '';

	import Fa from 'svelte-fa';
	import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
	import markdownData from '@/components/markdownInput/store';
	import Button from '@/components/button';
	import Popover from '@/components/popover';
	import { clickOutside } from '@/directives/onClickOutside';
	import hljs from 'highlight.js';

	let languages = hljs.listLanguages();
	languages.push('svelte');
	languages = languages.sort();

	let languageFilter = '';
	let filteredLanguages = languages;
	$: {
		if (languageFilter.length > 0) {
			filteredLanguages = languages.filter((language) => language.includes(languageFilter.toLowerCase()))
		} else {
			filteredLanguages = languages;
		}
	}

	let headingPopoverVisible = false;
	const closeHeadingPopover = () => {
		headingPopoverVisible = false;
	};
	const toggleHeadingPopover = () => {
		headingPopoverVisible = !headingPopoverVisible;
	};

	let codeBlockPopoverVisible = false;
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

			markdownData.update((data) => {
				data.content = modifiedMarkdown;

				return data;
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
	<div use:clickOutside on:click_outside={closeCodeBlockPopover}>
		<Button variant="ghost" on:click={toggleCodeBlockPopover}>
			code block <Fa icon={faCaretDown} />
		</Button>
		<Popover show={codeBlockPopoverVisible}>
			<div class='popover-options'>
				<input type="text" placeholder="language" bind:value={languageFilter} />
				<button on:click={() => applyCodeBlock()}><h3>text</h3></button>
				{#each filteredLanguages as language}
					<button on:click={() => applyCodeBlock(language.toLowerCase())}><h3>{language}</h3></button>
				{/each}
			</div>
		</Popover>
	</div>

	<div use:clickOutside on:click_outside={closeHeadingPopover}>
		<Button variant="ghost" on:click={toggleHeadingPopover}>
			Heading <Fa icon={faCaretDown} />
		</Button>
		<Popover show={headingPopoverVisible}>
			<div class='popover-options'>
				<button on:click={() => applyLineModifier('#', closeHeadingPopover)}><h1>Heading 1</h1></button>
				<button on:click={() => applyLineModifier('##', closeHeadingPopover)}><h2>Heading 2</h2></button>
				<button on:click={() => applyLineModifier('###', closeHeadingPopover)}><h3>Heading 3</h3></button>
				<button on:click={() => applyLineModifier('####', closeHeadingPopover)}><h4>Heading 4</h4></button>
				<button on:click={() => applyLineModifier('#####', closeHeadingPopover)}><h5>Heading 5</h5></button>
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

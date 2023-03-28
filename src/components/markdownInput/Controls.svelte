<script lang="ts">
	export let textareaRef: HTMLElement;
	export let text: string = '';

	import Fa from 'svelte-fa';
	import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
	import markdownData from '@/components/markdownInput/store';
	import Popover from '@/components/popover';

	let showHeadersPopover = false;

	const applyStringModifier = (text: string, startModifier: string, endModifier: string) => {
		if (textareaRef.selectionStart >= 0) {
			let startPos = textareaRef.selectionStart;
			let endPos = textareaRef.selectionEnd;

			const modifiedMarkdown =
				text.substring(0, startPos) +
				startModifier +
				text.substring(startPos, endPos) +
				endModifier +
				text.substring(endPos, text.length);

			markdownData.update((data) => {
				data.content = modifiedMarkdown;

				return data;
			});
		} else {
			console.log('hmmmm');
		}
	};

	const applyLineModifier = (text: string, modifier: string) => {
		let startPos = textareaRef.selectionStart;
		let endPos = textareaRef.selectionEnd;

		console.log('startPos :>> ', startPos);
		console.log('endPos :>> ', endPos);
		let totalChars = 0;

		const lines = text.split('\n');

		lines.forEach((line, index) => {
			const newTotalChars = totalChars + (line.length + 1); // add 1 to compensate for the newline character

			if (newTotalChars > startPos && totalChars <= endPos) {
				lines[index] = `${modifier} ${line}`;
			}

			totalChars = newTotalChars;
		});

		markdownData.update((data) => {
			data.content = lines.join('\n');

			return data;
		});
	};

	const applyHeader = (text: string, modifier: string) => {
		applyLineModifier(text, modifier);

		showHeadersPopover = false;
	};
</script>

<div class="container">
	<button class="control-option" on:click={() => applyStringModifier(text, '**', '**')}>
		<strong>bold</strong>
	</button>

	<button class="control-option" on:click={() => applyStringModifier(text, '*', '*')}>
		<em>italic</em>
	</button>

	<button class="control-option" on:click={() => applyStringModifier(text, '`', '`')}>
		<code>monospaced</code>
	</button>

	<button class="control-option" on:click={() => applyStringModifier(text, '```\n', '\n```')}>
		{'</>'}
	</button>

	<div class="popover-container control-option">
		<button
			on:click={() => {
				showHeadersPopover = !showHeadersPopover;
			}}
		>
			Headers&nbsp;&nbsp<Fa icon={faCaretDown} />
		</button>

		<Popover show={showHeadersPopover}>
			<button class="popover-option" on:click={() => applyHeader(text, '#')}>
				<h1>Header1</h1>
			</button>
			<button class="popover-option" on:click={() => applyHeader(text, '##')}>
				<h2>Header2</h2>
			</button>
			<button class="popover-option" on:click={() => applyHeader(text, '###')}>
				<h3>Header3</h3>
			</button>
			<button class="popover-option" on:click={() => applyHeader(text, '####')}>
				<h4>Header4</h4>
			</button>
			<button class="popover-option" on:click={() => applyHeader(text, '#####')}>
				<h5>Header5</h5>
			</button>
			<button class="popover-option" on:click={() => applyHeader(text, '######')}>
				<h6>Header6</h6>
			</button>
		</Popover>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		margin: 20px 5px 0px 5px;
		color: var(--caribbean-current);
	}

	.control-option {
		border-top: 1px solid var(--caribbean-current);
	}

	.control-option:first-child {
		border-left: 1px solid var(--caribbean-current);
		border-top-left-radius: 10px;
	}

	.control-option:last-child {
		border-right: 1px solid var(--caribbean-current);
		border-top-right-radius: 10px;
	}

	.control-option:not(:last-child) {
		border-right: 1px solid var(--caribbean-current);
	}

	.control-option > button {
		border-radius: 10px;
	}

	.popover-container {
		justify-content: center;
	}

	.popover-option {
		width: 100%;
		padding: 0 10px;
		cursor: pointer;
		border: none;
		background-color: white;
	}

	.popover-option:hover {
		background-color: var(--white);
	}

	.popover-option:last-child {
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	button {
		padding: 5px 10px;
		cursor: pointer;
		border-radius: 0px;
		border: none;
	}
</style>

<script lang="ts">
	export let textareaRef: HTMLElement
	export let text: string = '';

	import markdownData from '@/components/markdownInput/store';

	const applyStringModifier = (text: string, startModifier: string, endModifier: string) => {
		if (textareaRef.selectionStart >= 0) {
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
		} else {
			console.log('hmmmm');
		}
	};
</script>

<div class="container">
	<button on:click={() => applyStringModifier(text, '*', '*')}>bold</button>
	<button>italic</button>
	<button>monospaced</button>
	<button>{'</>'}</button>
	<select>
		<option value="#"><h1>Title</h1></option>
		<option value="##"><h2>Header</h2></option>
		<option value="###"><h3>Section</h3></option>
		<option value="####"><h4>Subsection</h4></option>
		<option value="#####"><h4>Subsection</h4></option>
		<option value="p"><p>paragraph</p></option>
	</select>
</div>

<style>
	.container {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		width: 100%;
	}
</style>

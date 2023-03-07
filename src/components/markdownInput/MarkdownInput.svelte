<script lang="ts">
	import Switch from '@/components/switch';

	let markdown = '';
	let oldMarkdown: string | null = null;
	let isPreview = false;
	let compiledMarkdown = '<div>Loading...</div>';

	$: if (isPreview && markdown !== oldMarkdown) {
		oldMarkdown = markdown

		compiledMarkdown = '<div>Loading...</div>';

		fetch('/api/markdown', {
			method: 'post',
			body: JSON.stringify({ markdown })
		})
			.then((res) => res.json())
			.then((body) => {
				compiledMarkdown = body?.mdx;
			})
			.catch((e) => {
				compiledMarkdown = '<div>Error compiling markdown</div>';
			})
	}
</script>

<div class='container'>
	<div>
		<div class='controls' />
		{#if isPreview}
			<div class='markdown'>{@html compiledMarkdown}</div>
		{:else}
			<textarea bind:value={markdown} />
		{/if}
	</div>

	<aside>
		<div class='preview-toggle'>
			<Switch bind:checked={isPreview} id='preview-toggle' />
			<label for='preview-toggle'>Preview</label>
		</div>

		<div class='metadata'>
			<select>
				<option value='front-end'>front-end</option>
			</select>
		</div>
	</aside>
</div>

<style>
	.container {
		flex-grow: 1;
		height: auto;
		display: grid;
		grid-template-columns: auto 200px;
		gap: 50px;
    justify-items: start;
    justify-content: center;
	}

	.controls {
		display: grid;
    justify-content: end;
    grid-template-columns: auto auto;
    align-items: center;
		padding-bottom: 15px;
		max-width: 100vw;
		width: 800px;
	}

	label {
		padding-left: 10px;
	}

	textarea, .markdown {
		max-width: 100vw;
		width: 800px;
		height: 100%;
		resize: none;
		padding: 20px;
		border-radius: 5px;
		border: solid 1px var(--mint);
	}

	textarea:focus, textarea:focus-visible {
		border: solid 2px var(--mint);
		outline: none;
	}

	aside {
		position: sticky;
		top: 125px;
		align-self: start;
		display: grid;
		gap: 15px;
	}

	.metadata {
		height: min-content;
		border: solid 1px var(--coral);
		border-radius: 5px;
		padding: 10px 15px;
	}
</style>

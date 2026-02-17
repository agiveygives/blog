<script lang="ts">
	import { run } from 'svelte/legacy';


	import classnames from 'classnames';
	import Button from '@/components/button';
	import Switch from '@/components/switch';
	import { MultiSelect } from '@/components/select';
	import Pill from '@/components/pill';
	import { TextInput } from '@/components/input';
	import markdownData from '@/components/markdownInput/store';
	interface Props {
		isPreview?: boolean;
		onPublish: () => void;
		onSaveDraft: () => void;
	}

	let { isPreview = $bindable(false), onPublish, onSaveDraft }: Props = $props();

	let authors: string = $state($markdownData.authors);
	let description: string = $state($markdownData.description);
	let tagOptions = [
		{ value: 'front-end', display: 'Front End' },
		{ value: 'back-end', display: 'Back End' },
		{ value: 'web', display: 'Web' },
		{ value: 'mobile', display: 'Mobile' },
		{ value: 'ios', display: 'iOS' },
		{ value: 'android', display: 'Android' }
	];

	run(() => {
		markdownData.update((data) => {
			data.description = description;
			data.authors = authors;

			return data;
		})
	});

	const onSelectionChange = (newTags: string[]) => {
		markdownData.update((data) => {
			data.tags = newTags;

			return data;
		});
	};
</script>

<div class="preview-toggle">
	<Switch bind:checked={isPreview} />
	<label for="preview-toggle">Preview</label>
</div>

<fieldset class="authors">
	<legend>Authors</legend>

	<TextInput placeholder="Authors" size="md" bind:value={authors} />
</fieldset>

<fieldset class="tags">
	<legend>Tags</legend>

	<MultiSelect options={tagOptions} selectedOptions={$markdownData.tags} onSelectionChange={onSelectionChange} />

	<div class={classnames('tags-container', { filled: $markdownData.tags.length > 0 })}>
		{#each $markdownData.tags as tag}
			<Pill>{tagOptions.find((option) => option.value === tag).display}</Pill>
		{/each}
	</div>
</fieldset>

<fieldset class="description">
	<legend>Description</legend>

	<div class="description-container">
		<textarea
			bind:value={description}
			maxLength={200}
			placeholder="Description about your blog post."
		></textarea>
	</div>
</fieldset>

<div class="publish-controls">
	<Button on:click={onPublish}>Publish</Button>
	<Button variant="ghost" on:click={onSaveDraft}>Save as draft</Button>
</div>

<style>
	fieldset {
		height: min-content;
		border-radius: 5px;
		padding: 10px 15px;
	}

	.tags-container {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 10px;
		width: 200px;
	}

	.tags-container.filled {
		margin: 10px 0px;
	}

	.tags {
		border: solid 1px var(--coral);
	}

	.tags > legend {
		color: var(--coral);
	}

	label {
		padding-left: 10px;
	}

	.authors {
		border: solid 1px var(--mint);
	}

	.authors > legend {
		color: var(--mint);
	}

	legend {
		font-size: 14px;
		font-size: bold;
	}

	.description {
		border: solid 1px var(--caribbean-current);
	}

	.description-container {
		display: flex;
	}

	.description-container > textarea {
		resize: vertical;
		min-height: 100px;
		flex-grow: 1;
		padding: 10px;
		border-radius: 5px;
		border: solid 1px var(--mint);
		font-family: 'Inter';
	}

	.publish-controls {
		display: flex;
		justify-content: space-between;
	}
</style>

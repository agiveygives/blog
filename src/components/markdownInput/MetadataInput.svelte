<script lang="ts">
	import classnames from 'classnames';
	import Button from '@/components/button';
	import Switch from '@/components/switch';
	import { MultiSelect } from '@/components/select';
	import Pill from '@/components/pill';
	import { TextInput } from '@/components/input';
	import markdownData from '@/components/markdownInput/store';
	import { onMount, onDestroy } from 'svelte';
	interface Props {
		isPreview?: boolean;
		onPublish: () => void;
		onSaveDraft: () => void;
	}

	let { isPreview = $bindable(false), onPublish, onSaveDraft }: Props = $props();

	let authors: string = $state($markdownData.authors);
	let description: string = $state($markdownData.description);
	let initialized = $state(false);
	let isUpdatingFromStore = $state(false);

	onMount(() => {
		initialized = true;
	});

	// Subscribe to store so local inputs reflect initial store values and avoid overwrites
	const unsubscribe = markdownData.subscribe((v) => {
		isUpdatingFromStore = true;
		if (v.authors !== authors) authors = v.authors;
		if (v.description !== description) description = v.description;
		isUpdatingFromStore = false;
	});

	onDestroy(() => {
		unsubscribe();
	});
	let tagOptions = [
		{ value: 'front-end', display: 'Front End' },
		{ value: 'back-end', display: 'Back End' },
		{ value: 'web', display: 'Web' },
		{ value: 'mobile', display: 'Mobile' },
		{ value: 'ios', display: 'iOS' },
		{ value: 'android', display: 'Android' },
		{ value: 'programming', display: 'Programming' },
		{ value: 'technology', display: 'Technology' },
	];

	function handleAuthorsInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const v = target.value;
		authors = v;
		if (isUpdatingFromStore) return;
		markdownData.update((data) => {
			if (data.authors === v) return data;
			return {
				...data,
				authors: v
			};
		});
	}

	function handleDescriptionInput(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		const v = target.value;
		description = v;
		if (isUpdatingFromStore) return;
		markdownData.update((data) => {
			if (data.description === v) return data;
			return {
				...data,
				description: v
			};
		});
	}

	const onSelectionChange = (newTags: string[]) => {
		if (!initialized) {
			return;
		}
		markdownData.update((data) => {
			const same = JSON.stringify(data.tags) === JSON.stringify(newTags);
			if (same) return data;
			return {
				...data,
				tags: newTags
			};
		});
	};
</script>

<div class="preview-toggle">
	<Switch bind:checked={isPreview} />
	<label for="preview-toggle">Preview</label>
</div>

<fieldset class="authors">
	<legend>Authors</legend>

	<TextInput placeholder="Authors" size="md" bind:value={authors} oninput={handleAuthorsInput} />
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
			oninput={handleDescriptionInput}
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

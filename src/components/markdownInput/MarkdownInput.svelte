<script lang="ts">
	export let blogId: string;
	export let blogData: BlogType = {
		description: '',
		authors: '',
		tags: [],
		title: 'New Blog Post',
		content: ''
	};

	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import Button from '@/components/button';
	import Drawer from '@/components/drawer';
	import { TextInput } from '@/components/input';
	import MetadataInput from '@/components/markdownInput/MetadataInput.svelte';
	import TitleInput from '@/components/markdownInput/TitleInput.svelte';
	import RenderMarkdown from '@/components/renderMarkdown';
	import Controls from '@/components/markdownInput/Controls.svelte';
	import type BlogType from '@/types/blogType';
	import markdownData from '@/components/markdownInput/store';

	markdownData.set(blogData);

	let innerWidth = 0;

	let textareaRef: HTMLTextAreaElement;

	let description: string = blogData.description;
	let authors: string = blogData.authors;
	let tags: string[] = blogData.tags;
	let blogTitle = blogData.title;
	let markdown = blogData.content;
	let isUpdatingFromStore = false;
	let isPreview = false;

	// Subscribe to the store and update `markdown` whenever `markdownData` changes
	const unsubscribe = markdownData.subscribe(value => {
		isUpdatingFromStore = true;
		blogTitle = value.title;
		description = value.description;
		authors = value.authors;
		tags = value.tags;
		markdown = value.content;
		isUpdatingFromStore = false;
	});

	// Clean up the subscription when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});

	// Reactive statement to update `markdownData` whenever `markdown` changes
	$: if (!isUpdatingFromStore) {
		markdownData.update((data) => {
			data.content = markdown;

			return data;
		})
	}

	const publish = (isPublic: boolean) => {
		const uri = blogId ? `/api/blog/${blogId}` : '/api/blog';

		fetch(uri, {
			method: 'post',
			body: JSON.stringify({
				title: blogTitle,
				description,
				authors,
				tags,
				content: markdown,
				draft: !isPublic,
				publishedAt: blogData.publishedAt || (new Date).toUTCString(),
			})
		})
			.then((res) => res.json())
			.then((body) => {
				goto(`/blog/${body.id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<svelte:window bind:innerWidth />

<div class="container">
	{#if innerWidth > 0}
		<div class="md-input-container">
			<TitleInput />

			<div class="controls">
				<Controls textareaRef={textareaRef} text={markdown} />
			</div>

			{#if isPreview}
				<RenderMarkdown {markdown} />
			{:else}
				<textarea bind:this={textareaRef} bind:value={markdown}></textarea>
			{/if}
		</div>

		{#if innerWidth < 1200}
			<Drawer placement="right" size="300px">
				<div class="drawer-content">
					<MetadataInput
						bind:isPreview
						onPublish={() => publish(true)}
						onSaveDraft={() => publish(false)}
					/>
				</div>
			</Drawer>
		{:else}
			<aside>
				<MetadataInput
					bind:isPreview
					onPublish={() => publish(true)}
					onSaveDraft={() => publish(false)}
				/>
			</aside>
		{/if}
	{/if}
</div>

<style>
	.container {
		flex-grow: 1;
		height: auto;
		display: grid;
		grid-template-columns: 800px auto;
		gap: 50px;
		justify-items: start;
		justify-content: center;
	}

	@media screen and (max-width: 1200px) {
		.container {
			grid-template-columns: 80vw;
		}
	}

	.md-input-container {
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	.controls {
		display: grid;
		justify-content: start;
		grid-template-columns: auto auto;
		align-items: center;
		padding-bottom: 15px;
		max-width: 100vw;
	}

	textarea {
		height: 100%;
		resize: none;
		padding: 20px;
		border-radius: 5px;
		border: solid 1px var(--mint);
	}

	textarea:focus,
	textarea:focus-visible {
		border: solid 2px var(--mint);
		outline: none;
	}

	aside {
		position: sticky;
		top: 105px;
		align-self: start;
		display: grid;
		gap: 15px;
	}

	.drawer-content {
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding: 20px;
	}
</style>

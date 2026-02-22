<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
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
	interface Props {
		blogId: string;
		blogData?: BlogType;
	}

	let { blogId, blogData = {
		description: '',
		authors: '',
		tags: [],
		title: 'New Blog Post',
		content: '',
		publishedAt: '',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	} }: Props = $props();

	// Initialize the shared store once on mount to avoid continuous feedback loops
	onMount(() => {
		markdownData.set(blogData);
	});

	let innerWidth = $state(0);

	let textareaRef: HTMLTextAreaElement = $state();

	let description = $derived(blogData.description);
	let authors = $derived(blogData.authors);
	let tags = $derived(blogData.tags);
	let blogTitle = $derived(blogData.title);
	let markdown = $derived(blogData.content);
	let isUpdatingFromStore = $state(false);
	let isPreview = $state(false);

	// Subscribe to the store and update local values only when they actually change
	const unsubscribe = markdownData.subscribe(value => {
		isUpdatingFromStore = true;
		if (value.title !== blogTitle) blogTitle = value.title;
		if (value.description !== description) description = value.description;
		if (value.authors !== authors) authors = value.authors;
		if (JSON.stringify(value.tags) !== JSON.stringify(tags)) tags = value.tags;
		if (value.content !== markdown) markdown = value.content;
		isUpdatingFromStore = false;
	});

	// Clean up the subscription when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});

	// Use an explicit input handler to update the store (event-driven, not reactive)
	function handleMarkdownInput(e: Event) {
		if (isUpdatingFromStore) return;
		const target = e.target as HTMLTextAreaElement;
		const val = target.value;
		markdown = val;
		markdownData.update((data) => {
			if (data.content === val) return data;
			return {
				...data,
				content: val
			};
		});
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
				<textarea bind:this={textareaRef} bind:value={markdown} oninput={handleMarkdownInput}></textarea>
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

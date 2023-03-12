<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '@/components/button';
	import Drawer from '@/components/drawer';
	import { TextInput } from '@/components/input';
	import MetadataInput from '@/components/markdownInput/MetadataInput.svelte';
	import TitleInput from '@/components/markdownInput/TitleInput.svelte';

	let innerWidth = 0;

	let description: string = '';
	let authors: string = '';
	let tags: string[] = [];
	let blogTitle = 'New Blog Post';
	let markdown = '';
	let oldMarkdown: string | null = null;
	let isPreview = false;
	let compiledMarkdown = '<div>Loading...</div>';

	const publish = (isPublic: boolean) => {
		fetch('/api/blog', {
			method: 'post',
			body: JSON.stringify({
				title: blogTitle,
				description,
				authors,
				tags,
				content: markdown,
				draft: !isPublic
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

	$: if (isPreview && markdown !== oldMarkdown) {
		oldMarkdown = markdown;

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
			});
	}
</script>

<svelte:window bind:innerWidth />

<div class="container">
	{#if innerWidth > 0}
		<div class="md-input-container">
			<TitleInput bind:value={blogTitle} />
			<div class="controls" />
			{#if isPreview}
				<div class="markdown">{@html compiledMarkdown}</div>
			{:else}
				<textarea bind:value={markdown} />
			{/if}
		</div>

		{#if innerWidth < 1200}
			<Drawer placement="right" size="300px">
				<div class="drawer-content">
					<MetadataInput
						bind:isPreview
						bind:tags
						bind:authors
						bind:description
						onPublish={() => publish(true)}
						onSaveDraft={() => publish(false)}
					/>
				</div>
			</Drawer>
		{:else}
			<aside>
				<MetadataInput
					bind:isPreview
					bind:tags
					bind:authors
					bind:description
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
		justify-content: end;
		grid-template-columns: auto auto;
		align-items: center;
		padding-bottom: 15px;
		max-width: 100vw;
	}

	textarea,
	.markdown {
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

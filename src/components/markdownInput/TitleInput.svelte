<script lang="ts">
	import Button from '@/components/button';
	import { TextInput } from '@/components/input';
	import { onMount, onDestroy } from 'svelte';
	import markdownData from '@/components/markdownInput/store';

	let value = $state($markdownData.title);
	let isEditTitle = $state(false);
	let initialized = $state(false);
	let isUpdatingFromStore = $state(false);

	onMount(() => {
		initialized = true;
	});

	// Keep local `value` in sync with the shared store to avoid overwriting it on mount
	const unsubscribe = markdownData.subscribe((v) => {
		isUpdatingFromStore = true;
		if (v.title !== value) value = v.title;
		isUpdatingFromStore = false;
	});

	onDestroy(() => {
		unsubscribe();
	});


	function handleTitleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const v = target.value;
		value = v;
		if (isUpdatingFromStore) return;
		markdownData.update((data) => {
			if (data.title === v) return data;
			return {
				...data,
				title: v
			};
		});
	}
</script>

<div class="title">
	{#if isEditTitle}
		<TextInput bind:value size="xl" on:input={handleTitleInput} />
		<Button
			variant="primary"
			on:click={() => {
				isEditTitle = false;
			}}
		>
			Done
		</Button>
	{:else}
		<div>{value}</div>
		<Button
			variant="ghost"
			on:click={() => {
				isEditTitle = true;
			}}
		>
			Edit
		</Button>
	{/if}
</div>

<style>
	.title {
		display: grid;
		grid-template-columns: auto 100px;
		gap: 20px;
		align-items: center;
		font-size: 24px;
	}
</style>

<script lang="ts">
	import { run } from 'svelte/legacy';

	import Button from '@/components/button';
	import { TextInput } from '@/components/input';
	import markdownData from '@/components/markdownInput/store';

	let value = $state($markdownData.title);
	let isEditTitle = $state(false);

	run(() => {
		markdownData.update((data) => {
			data.title = value;

			return data;
		})
	});
</script>

<div class="title">
	{#if isEditTitle}
		<TextInput bind:value size="xl" />
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

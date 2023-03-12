<script lang='ts'>
	export let value = 'New Blog Post';
	let isEditTitle = false;

	import Button from '@/components/button';
	import { TextInput } from '@/components/input';
</script>

<div class="title">
	{#if isEditTitle}
		<TextInput bind:value={value} size='xl' />
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

<script lang="ts">
	import { run } from 'svelte/legacy';


	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { loggedIn } from '@/stores/loggedIn';
	import MarkdownInput from '@/components/markdownInput';
	let { data } = $props();

	run(() => {
		if (browser && !$loggedIn) {
			invalidateAll();
		}
	});
</script>

<div class="page-content">
	<MarkdownInput blogData={data.blogData} blogId={data.blogId} />
</div>

<style>
	div {
		justify-content: flex-start;
		flex-direction: column;
	}
</style>

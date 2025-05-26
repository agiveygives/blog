<script>
	export let data;

	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { loggedIn } from '@/stores/loggedIn';
	import MarkdownInput from '@/components/markdownInput';

	$: if (browser && !$loggedIn) {
		invalidateAll();
	}

	console.log("In page")
	console.log(data)
	console.log(data.blogData.title)
	console.log(data.blogData.updatedAt)
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

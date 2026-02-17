<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { loggedIn } from '@/stores/loggedIn';
	import MarkdownInput from '@/components/markdownInput';
	let { data } = $props();

	$effect(() => {
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

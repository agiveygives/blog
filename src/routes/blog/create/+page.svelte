<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { loggedIn } from '@/stores/loggedIn';
	import MarkdownInput from '@/components/markdownInput';

	$: if (browser && !$loggedIn) {
		invalidateAll();
	}
</script>

<div class='page-content'>
	<MarkdownInput />
</div>

<style>
	div {
		justify-content: flex-start;
		flex-direction: column;
	}
</style>

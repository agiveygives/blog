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

<div>
	<MarkdownInput />
</div>

<style>
	div {
		margin: 100px 20px 15px 20px;
		height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
	}
</style>

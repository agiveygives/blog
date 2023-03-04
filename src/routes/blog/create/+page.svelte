<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { loggedIn } from '@/stores/loggedIn';

	$: if (browser && !$loggedIn) {
		invalidateAll();
	}
</script>

<div>
	<h3>Create Blog</h3>
</div>

<style>
	div {
		margin: 100px 20px 15px 20px;
	}
</style>

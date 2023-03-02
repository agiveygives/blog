<script>
	import { onMount } from 'svelte';
	import { redirectLocation } from '@/stores/redirectLocation';

	onMount(() => {
		redirectLocation.set('/blog');
	})
</script>

<div>
	<h3>Blog</h3>
</div>

<style>
	div {
		margin: 100px 20px 15px 20px;
	}
</style>

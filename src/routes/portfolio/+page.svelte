<script>
	import { onMount } from 'svelte';
	import { redirectLocation } from '@/stores/redirectLocation';

	onMount(() => {
		redirectLocation.set('/portfolio');
	})
</script>

<div>
	<h3>Portfolio</h3>
</div>

<style>
	div {
		margin: 100px 20px 15px 20px;
	}
</style>

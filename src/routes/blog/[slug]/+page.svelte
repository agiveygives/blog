<script>
  export let data;

	import { onMount } from 'svelte';
	import { redirectLocation } from '@/stores/redirectLocation';

	onMount(() => {
		redirectLocation.set('/blog');
	})
</script>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

<style>
	div {
		margin: 100px 20px 15px 20px;
	}
</style>

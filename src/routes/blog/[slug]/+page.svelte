<script>
	export let data;
</script>

<article class='page-content'>
	<h1>{data.title}</h1>
	<p>Published: {data.createdAt}</p>
	<p>Last updated: {data.updatedAt}</p>
	<svelte:component this={data.content} />
</article>

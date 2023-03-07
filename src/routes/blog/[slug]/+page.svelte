<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.createdAt}</p>
	<p>Last updated: {data.updatedAt}</p>
	<svelte:component this={data.content} />
</article>

<style>
	article {
		margin: 100px 20px 15px 20px;
	}
</style>

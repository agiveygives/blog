<script>
  export let data;
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

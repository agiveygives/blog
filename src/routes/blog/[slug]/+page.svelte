<script>
	export let data;

	const createdAt = (new Date(data.createdAt)).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
	const updatedAt = (new Date(data.updatedAt)).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
</script>

<article class='page-content'>
	<h1>{data.title}</h1>
	<p>{data.authors}</p>
	<p>Published: {createdAt}</p>
	<p>Last updated: {updatedAt}</p>
	<div>
		{@html data.content}
	</div>
</article>

<style>
	article {
		display: block;
		align-items: center;
    width: 50%;
    margin: 100px auto;
		min-width: 500px;
	}

	h1 {
		margin-bottom: 0px;
	}

	p {
		font-size: 12px;
	}
</style>

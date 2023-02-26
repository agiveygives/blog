<script lang='ts'>
	import Header from '@/components/header';
</script>

<style>
	:global(body) {
		min-height: 100vh;
		margin: 0;
		background-color: #f2f2f2;
		font-size: 18px;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.content {
		margin: 100px 20px 15px 20px;
	}
</style>

<Header />

<div class='content'>
	<slot />
</div>

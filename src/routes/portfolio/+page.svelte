<script lang="ts">

	import PortfolioCard from '@/components/portfolioCard';
	let { data } = $props();
</script>

<div class="page-content">
	<div class="container">
		{#each data.portfolio as item}
			<PortfolioCard {...item} />
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>

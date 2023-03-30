<script>
	import PortfolioCard from '@/components/portfolioCard';

	const portfolioItems = [
		{
			title: "ESO Craft Request",
			description: "A React web app that enables Elder Scrolls Online users to users to build a request for gear to be crafted in game, and submit it to a Discord Server.",
			imageUrl: "https://firebasestorage.googleapis.com/v0/b/givens-blog.appspot.com/o/portfolio%2Feso-craft-request%2Fthumbnail.png?alt=media",
			techStack: ['React', 'Redux', 'Javascript', 'Sass', 'NodeJS', 'Express.js', 'Google Firebase', 'AWS Amplify'],
			demoUrl: 'https://demo.esocraftrequest.com',
			githubRepo: 'https://github.com/agiveygives/eso-craft-request',
		},
		{
			title: "Blog and Portfolio Site",
			description: "A personal website to allow myself to host a blog and display all my personal projects.",
			imageUrl: "https://firebasestorage.googleapis.com/v0/b/givens-blog.appspot.com/o/portfolio%2Fblog%2Fthumbnail.png?alt=media",
			techStack: ['Svelte', 'SvelteKit', 'Typescript', 'CSS', 'Google Firebase', 'Netlify'],
			demoUrl: 'https://andrewgivens.net',
			githubRepo: 'https://github.com/agiveygives/blog',
		}
	]
</script>

<div class="page-content">
	<div class="container">
		{#each portfolioItems as item}
			<PortfolioCard {...item} />
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		gap: 50px;
	}
</style>

<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let techStack: string[];
	export let demoUrl: string;
	export let githubRepo: string;

	import Fa from 'svelte-fa';
	import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import Pill from '@/components/pill';
</script>

<div class="card">
	<img src={imageUrl} alt={`${title} project image`} />

	<h3>{title}</h3>
	<p>{description}</p>

	<div class="footer">
		<div class="row">
			{#each techStack as tool}
				<Pill color="var(--caribbean-current)">{tool}</Pill>
			{/each}
		</div>
		<div class="row links">
			<a href={demoUrl} target="_blank" rel="noreferrer"><Fa icon={faExternalLink} size="lg" /></a>
			<a href={githubRepo} target="_blank" rel="noreferrer"><Fa icon={faGithub} size="2x" /></a>
		</div>
	</div>
</div>

<style>
	.card {
		max-width: 30%;
		background-color: var(--white);
		border: 1px solid var(--mint);
		border-radius: 10px;
		display: grid;
		justify-items: center;
		padding: 10px;
		margin-top: 100px;
	}

	@media screen and (max-width: 1200px) {
		.card {
			max-width: 45%;
		}
	}

	@media screen and (max-width: 700px) {
		.card {
			max-width: 100%;
		}
	}

	img {
		width: 90%;
		border-radius: 10px;
		margin-top: -100px;
		box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
		max-height: 200px;
		object-fit: cover;
		object-position: top;
	}

	.footer {
		display: grid;
		grid-template-columns: auto 25%;
		width: 100%;
	}

	.row {
		display: flex;
		flex-direction: row;
		column-gap: 10px;
		align-items: center;
		flex-wrap: wrap;
	}

	.links {
		justify-content: space-around;
		align-items: center;
	}

	a {
		color: black;
	}

	a:hover {
		color: var(--mint);
	}
</style>

<script>
	import { onMount } from 'svelte';

	export let companies;
	const totalCompanies = companies.length;
</script>

<div class="experience">
	{#each companies as { company, location, roles }, i}
		<div class="company">
			<h2>{company}</h2>
			<p>{location}</p>
		</div>
		<div class="roles">
			{#each roles as role}
				<h3>{role.title}</h3>
				<h4>{role.timeline}</h4>
				<ul>
					{#each role.duties as duty}
						<li>{duty}</li>
					{/each}
				</ul>
			{/each}
		</div>
		{#if i + 1 < totalCompanies}
			<div class="divider" />
		{/if}
	{/each}
</div>

<style>
	.experience {
		display: grid;
		grid-template-columns: auto auto;
		padding: 20px;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
		background-color: var(--caribbean-current);
		color: var(--coral);
	}

	.divider {
		grid-column: 1 / -1;
		border-bottom: 1px solid var(--coral);
	}

	@media screen and (max-width: 700px) {
		.experience {
			grid-template-columns: auto;
		}
	}
</style>

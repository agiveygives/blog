<script>
	const companies = [
		{
			company: 'Big Nerd Ranch',
			location: 'Atlanta, GA (remote)',
			roles: [
				{
					title: 'Senior Software Engineer',
					timeline: 'October 2021 - Present',
					duties: []
				}
			]
		},
		{
			company: 'Retail Success',
			location: 'Overland Park, KS',
			roles: [
				{
					title: 'Front-End Developer',
					timeline: 'July 2020 - October 2021',
					duties: []
				}
			]
		},
		{
			company: 'Cerner',
			location: 'Kansas City, MO',
			roles: [
				{
					title: 'Senior Software Engineer',
					timeline: 'July 2018 - July 2020',
					duties: []
				},
				{
					title: 'Senior Software Engineer Intern',
					timeline: 'May 2017 - July 2017',
					duties: []
				}
			]
		}
	]
	const totalCompanies = companies.length;
</script>

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

<div class='experience'>
	{#each companies as { company, location, roles}, i}
		<div class='company'>
			<h2>{company}</h2>
			<p>{location}</p>
		</div>
		<div class='roles'>
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
		{#if (i + 1) < totalCompanies}
			<div class='divider' />
		{/if}
	{/each}
</div>

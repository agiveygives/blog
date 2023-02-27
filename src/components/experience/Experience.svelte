<script>
	import { onMount } from 'svelte';
	import { firebase } from '@/stores/firebase';

	onMount(() => {
		firebase.subscribe((config) => {
			if (config) {
				config.db.collection('experience').onSnapshot(querySnapshot => {
					// Get all documents from collection - with IDs
					const data = querySnapshot.docs.map(doc => ({
						...doc.data(),
						id: doc.id,
					}));

					console.log(data);
				});
			}
		});
	})

	const companies = [
		{
			company: 'Big Nerd Ranch',
			location: 'Atlanta, GA (remote)',
			roles: [
				{
					title: 'Senior Software Engineer',
					timeline: 'October 2021 - Present',
					duties: [
						'Consulted for a client on a greenfield international payment platform.',
						'Developed a greenfield full-stack web app using Rails, React, TypeScript, and GraphQL.',
						'Worked with the client to create good development practices for code quality and testing',
						'Helped cultivate an agile culture for the client team.'
					]
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
					duties: [
						'Developed for an ASP.NET application using TypeScript, React and Redux.',
						'Pioneered a shift to TDD within our front-end applications using react-testing-library',
						'Uplifted our ASP.NET MVC front-end to a mobile friendly React application.'
					]
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
					duties: [
						'Developed for a Ruby on Rails application using React and Redux.',
						'Developed for an API using Ruby and AWS Technologies.',
						'Developed enhancements and bug fixes for mpage components using JavaScript.',
						'Developed tests with  Rspec, Jest with Enzyme, Jasmine, and Selenium WebdriverIO.',
						'Participated in Agile practices and ceremonies.',
						'Mentored new hires in Cerner’s Dev Academy.'
					]
				},
				{
					title: 'Senior Software Engineer Intern',
					timeline: 'May 2017 - July 2017',
					duties: [
						'Developed for Population Health system with the Care Management Team.',
						'Used JavaScript, HTML5, and CSS3 to complete stories during two week iterations.',
						'Updated Dynamic Document templates to include new CSS styles and information.'
					]
				}
			]
		}
	];
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

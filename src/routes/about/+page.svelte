<script lang="ts">
	let { data } = $props();
</script>

<div class="page-content">
	<section class="about-section">
		<div class="about-content">
			<div class="profile-section">
				<img class="profile-image" src={data.profileImageSrc} alt="Andrew Givens" />
				<div class="profile-info">
					<h2>Andrew Givens</h2>
					<p class="title">Software Engineer</p>

					<p>
						Hello! I'm a software engineer with a passion for building products that help solve problems for regular people.
						I love focusing on the user and developer experience.
					</p>
				</div>
			</div>

			<div class="bio-section">

				<h3>Skills</h3>
				<ul class="skills-list">
					<li>Ruby on Rails</li>
					<li>React</li>
					<li>Svelte</li>
					<li>Vue</li>
					<li>Temporal.io</li>
					<li>Distributed Systems</li>
					<li>Service-Oriented Architecture</li>
					<li>RESTful API Design</li>
					<li>PostgreSQL / MySQL / MariaDB</li>
					<li>Docker</li>
					<li>Test-Driven Development (TDD)</li>
					<li>System Design & Architecture</li>
					<li>Cross-functional Collaboration</li>
					<li>Mentorship & Knowledge Sharing</li>
					<li>Empathy-driven Development</li>
					<li>Remote & Async Communication</li>
					<li>Crochet</li>
					<li>Spontaneous DIY</li>
					<li>Multi-pet Household Management</li>
				</ul>

				<h3>Interests</h3>
				<p>
					I'm a Senior Software Engineer at Justworks, where I focus on building technology that improves the lives of
					everyday people. One of the projects I’m most proud of is designing and building Cross-border Payment
					Orchestration using Ruby on Rails and Temporal. It was a large, impactful effort that enabled our platform
					to support more countries and significantly improved the developer experience for engineers working on our
					international products. I have a flexible work style and enjoy diving into complex challenges that create
					real value for others.
				</p>
				<p>
					I grew up in the Midwest and currently live in Raytown, Missouri—a small suburb just outside of Kansas City.
					When I’m not working, I love spending time with my wife and our seven pets (three dogs and four cats),
					usually binge-watching TV or taking on DIY projects like replacing flooring or landscaping. I’m also a huge
					fan of board games, video games, and fantasy sports, and I follow the Kansas City Royals, St. Louis
					Cardinals, and Kansas City Chiefs pretty religiously. Crochet and traveling are also high on my list of
					hobbies when I get the chance.
				</p>
				<p>
					One of my biggest goals is to start my own company someday—something that continues my mission of creating
					thoughtful, people-first solutions. More than anything, I want to have a positive impact on the world around
					me, whether that's through my work, the way I show up for others, or the communities I’m a part of. I'm
					driven by purpose, grounded in curiosity, and always looking for the next opportunity to build something
					meaningful.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.page-content {
		max-width: 800px;
		margin: 2rem auto;
		padding: 2rem;
	}

	.about-section {
		padding: 2rem;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.profile-section {
		display: grid;
		grid-template-columns: 30% 1fr;
		gap: 2rem;
	}

	.profile-image {
		width: 100%;
		border-radius: 50%;
		max-width: 300px;
	}

	.profile-info h2 {
		font-size: 1.8rem;
		margin: 0;
		color: #333;
	}

	.title {
		color: #666;
		font-size: 1.1rem;
		margin: 0.5rem 0;
	}

	.bio-section {
		line-height: 1.6;
	}

	.bio-section p {
		margin-bottom: 1.5rem;
		color: #444;
	}

	h3 {
		font-size: 1.4rem;
		color: #333;
		margin: 1.5rem 0 1rem;
	}

	.skills-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.skills-list li {
		background: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		color: #555;
	}

	@media (max-width: 600px) {
		.profile-section {
			flex-direction: column;
			text-align: center;
		}

		.page-content {
			padding: 1rem;
		}
	}
</style>

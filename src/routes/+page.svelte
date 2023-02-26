<script>
	import Resume from '@/components/resume';
</script>

<style>
	.info-container {
		display: grid;
		grid-template-columns: 25% auto;
	}

	.about {
		justify-self: start;
	}

	.resume {
		justify-self: end;
	}

	.intro {
		display: grid;
		justify-content: center;
		height: 100vh;
		background-color: #f2f2f2;
		color: #156064;
		margin: -100px -20px 0px -20px;
	}

	.intro-content {
		margin: auto;
		text-align: center;
	}

	.logos {
		height: 100px;
	}

	.logos > img {
		height: 100px;
		padding: 10px;
	}
</style>

<section class='intro'>
	<div class='intro-content'>
		<h3>Andrew Givens</h3>
		<p>Full Stack Software Engineer</p>
		<div class='logos'>
			<img src='/images/react-logo.png' alt='React JS Logo' />
			<img src='/images/ruby-on-rails-logo.png' alt='Ruby on Rails Logo' />
			<img src='/images/graphql-logo.png' alt='Graph QL Logo' />
			<img src='/images/docker-logo.png' alt='Docker Logo' />
		</div>
	</div>
</section>

<div class='info-container'>
	<article class='about'>
		fun facts
	</article>

	<article class='resume'>
		<Resume />
	</article>
</div>

<script>
	import Resume from '@/components/resume';
</script>

<style>
	div {
		display: grid;
		grid-template-columns: 25% auto;
	}

	.about {
		justify-self: start;
	}

	.resume {
		justify-self: end;
	}
</style>

<div>
	<article class='about'>
		fun facts
	</article>

	<article class='resume'>
		<Resume />
	</article>
</div>

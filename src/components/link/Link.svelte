<script lang="ts">
	export let href = '';
</script>

<a {href}><slot /></a>

<style lang="scss">
	@import '@/scss/_variables.scss';

	a {
		color: $caribbean-current;
		text-decoration: none;
		display: block;
		position: relative;
		padding: 2px 0;
		text-decoration: none;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 0.1em;
			background-color: $caribbean-current;
			opacity: 0;
			transition: opacity 300ms, transform 300ms;
			opacity: 1;
			transform: scale(0);
			transform-origin: center;
		}

		&:hover::after,
		&:focus::after {
			opacity: 1;
			transform: translate3d(0, 0.2em, 0);
			transform: scale(1);
		}
	}
</style>

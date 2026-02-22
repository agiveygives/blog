<script lang="ts">
	interface Props {
		href?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '', children }: Props = $props();
</script>

<a {href}>{@render children?.()}</a>

<style lang="scss">
	@use '@/scss/_colors.scss' as colors;

	a {
		color: colors.$caribbean-current;
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
			background-color: colors.$caribbean-current;
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

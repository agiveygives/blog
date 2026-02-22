<script lang="ts">
	const r = Math.round(Math.random(255) * 255);
	const g = Math.round(Math.random(255) * 255);
	const b = Math.round(Math.random(255) * 255);

	let { color = `rgb(${r}, ${g}, ${b})`, children } = $props();

	const style = $derived(`--color: ${color}`);
</script>

<div {style}>
	{@render children?.()}
</div>

<style lang="scss">
	div {
		$color: var(--color);

		padding: 5px;
		border-radius: 50px;
		font-size: 12px;
		margin: 5px 0px;
		width: -moz-fit-content;
		width: fit-content;
		color: $color;
		border: solid 1px $color;
		filter: contrast(50%);
		/* background-color: lighten($color, 80%); */
	}
</style>

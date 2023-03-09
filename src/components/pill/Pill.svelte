<script lang='ts'>
	let pill;

	$: {
		if (pill) {
			let r = Math.round(Math.random(255) * 255);
			let g = Math.round(Math.random(255) * 255);
			let b = Math.round(Math.random(255) * 255);
			let backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`;
			let color = `rgb(${r}, ${g}, ${b})`;
			pill.style.backgroundColor = backgroundColor;
			pill.style.border = `solid 1px ${color}`;
			pill.style.color = color;
		}
	}
</script>

<div bind:this={pill}>
	<slot />
</div>

<style lang='scss'>
	div {
		padding: 5px;
		border-radius: 50px;
		font-size: 16px;
		margin: 5px 0px;
		width: fit-content;
	}
</style>
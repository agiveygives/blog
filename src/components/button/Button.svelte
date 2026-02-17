<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'text' | 'ghost' = 'primary';
	export let rounded = false;

	import classnames from 'classnames';

	let buttonClasses: string = variant;

	$: buttonClasses = classnames(variant, {
		rounded: rounded
	});
</script>

<button class={buttonClasses} on:click>
	<slot />
</button>

<style lang="scss">
	@use "@/scss/_colors.scss" as colors;
	@use "sass:color";

	button {
		height: fit-content;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		padding: 5px 0px;
		transition: 0.3s ease-in-out;
		cursor: pointer;
		padding: 5px 10px;
	}

	.primary {
		background-color: colors.$mint;
		color: colors.$white;

		&:hover,
		&:focus {
			background-color: color.scale(colors.$mint, $lightness: -10%)
		}
	}

	.secondary {
		background-color: colors.$coral;
		color: colors.$white;

		&:hover,
		&:focus {
			background-color: color.scale(colors.$coral, $lightness: -10%);
		}
	}

	.text {
		background-color: transparent;
		color: colors.$mint;

		&:hover,
		&:focus {
			color: color.scale(colors.$mint, $lightness: -10%);
		}
	}

	.ghost {
		border: solid 1px colors.$caribbean-current;
		background-color: transparent;
		color: colors.$caribbean-current;

		&:hover,
		&:focus {
			text-shadow: 0px 0px 1px colors.$caribbean-current;
		}
	}
</style>

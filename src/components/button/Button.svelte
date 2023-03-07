<script lang='ts'>
	export let variant: 'primary' | 'secondary' | 'text' | 'ghost' = 'primary';
	export let rounded = false;

	import classnames from 'classnames';

	let buttonClasses = variant;

	$: buttonClasses = classnames(
		variant,
		{
			rounded: rounded
		},
	)
</script>

<button class={buttonClasses} on:click>
	<slot />
</button>

<style lang='scss'>
	@import '@/scss/_variables.scss';

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
		background-color: $mint;
		color: $white;

		&:hover, &:focus {
			background-color: darken($mint, 10%);
		}
	}

	.secondary {
		background-color: $coral;
		color: $white;

		&:hover, &:focus {
			background-color: darken($coral, 10%);
		}
	}

	.text {
		background-color: transparent;
		color: $mint;

		&:hover, &:focus {
			color: darken($mint, 10%);
		}
	}

	.ghost {
		border: solid 1px $caribbean-current;
		background-color: transparent;
		color: $caribbean-current;

		&:hover, &:focus {
			text-shadow:0px 0px 1px $caribbean-current;
		}
	}
</style>


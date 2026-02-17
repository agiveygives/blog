<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	interface Props {
		placeholder?: string;
		value: string;
		size?: 'sm' | 'md' | 'lg' | 'xl';
	}

	let { placeholder = '', value = $bindable(), size = 'md' }: Props = $props();
</script>

<input type="text" bind:value onclick={bubble('click')} {placeholder} class={size} />

<style>
	input {
		padding: 5px;
		border-radius: 5px;
		border: var(--mint) solid 1px;
	}

	input.sm {
		font-size: 12px;
	}
	input.md {
		font-size: 16px;
	}
	input.lg {
		font-size: 20px;
	}
	input.xl {
		font-size: 24px;
	}

	input:focus,
	input:hover,
	input:focus-visible {
		border-color: var(--caribbean-current);
	}
</style>

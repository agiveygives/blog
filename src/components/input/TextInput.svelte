<script lang='ts'>
	export let placeholder = '';
	export let value: string;
</script>

<input type='text' bind:value={value} on:click placeholder={placeholder} />

<style>
	input {
		padding: 5px;
		border-radius: 5px;
		border: var(--mint) solid 1px;
		font-size: 16px;
	}

	input:focus,
	input:hover,
	input:focus-visible {
		border-color: var(--caribbean-current);
	}
</style>

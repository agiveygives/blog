<script lang='ts'>
	import classnames from 'classnames';
	import { clickOutside } from '@/directives/onClickOutside';
	import { TextInput } from '@/components/input';
	import Popover from '@/components/popover';

	export let options = [];
	export let onSelectionChange = (selectedOptions: string[]) => {};
	let filteredOptions = options;
	let expanded = false;
	let selectedOptions = [];
	let search = '';

	const selectOption = (event) => {
		const clickedOption = event.target.value;
		const selectedIndex = selectedOptions.findIndex((option) => (
			option === clickedOption
		));

		if (selectedIndex > -1) {
			selectedOptions.splice(selectedIndex, 1);
		} else {
			selectedOptions.push(event.target.value);
		}

		onSelectionChange(selectedOptions)
	}

	const showCheckboxes = () => {
		expanded = true;
	}

	const closeCheckboxes = () => {
		expanded = false;
	}

	let checkboxClass = 'checkboxes';
	$: checkboxClass = classnames('checkboxes', { hidden: !expanded });

	$: filteredOptions = options.filter((option) => option.display.toLowerCase().includes(search.toLowerCase()))
</script>

<div use:clickOutside on:click_outside={closeCheckboxes}>
	<TextInput bind:value={search} placeholder='Search' on:click={showCheckboxes} />

	<Popover show={expanded}>
		{#each filteredOptions as option}
			<label for={option.value}>
				<input
					type="checkbox"
					id={option.value}
					value={option.value}
					on:click={selectOption}
				/>
				<span>{option.display}</span>
			</label>
		{/each}
	</Popover>
</div>

<style>
	label {
		display: block;
	}

	label:hover {
		background-color: #1e90ff;
}
</style>
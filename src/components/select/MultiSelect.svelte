<script lang='ts'>
	import classnames from 'classnames';
	import { clickOutside } from '@/directives/onClickOutside';

	export let options = [
		{ value: 'front-end', display: 'Front End' },
		{ value: 'back-end', display: 'Back End' },
		{ value: 'web', display: 'Web' },
		{ value: 'mobile', display: 'Mobile' },
		{ value: 'ios', display: 'iOS' },
		{ value: 'android', display: 'Android' },
	];
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

<div class="multiselect" use:clickOutside on:click_outside={closeCheckboxes}>
	<div class="selectBox">
		<input type='text' bind:value={search} placeholder='Search' on:click={showCheckboxes} />
	</div>
	<div class={checkboxClass}>
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
	</div>
</div>

<style>
	.multiselect {
		width: 200px;
	}

	.selectBox {
		position: relative;
		cursor: pointer;
	}

	.selectBox input {
		width: 100%;
		font-weight: bold;
	}

	.checkboxes {
		border: 1px #dadada solid;
	}

	.checkboxes label {
		display: block;
	}

	.checkboxes label:hover {
		background-color: #1e90ff;
}
</style>
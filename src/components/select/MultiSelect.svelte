<script lang="ts">
	import classnames from 'classnames';
	import { clickOutside } from '@/directives/onClickOutside';
	import { TextInput } from '@/components/input';
	import Popover from '@/components/popover';

	let { options = [], selectedOptions = [], onSelectionChange = (selectedOptions: string[]) => {} } = $props();
	let filteredOptions = $derived(options);
	let expanded = $state(false);
	let search = $state('');

	const selectOption = (event) => {
		const clickedOption = event.target.value;
		const selectedIndex = selectedOptions.findIndex((option) => option === clickedOption);

		let newSelected;
		if (selectedIndex > -1) {
			newSelected = selectedOptions.filter((o) => o !== clickedOption);
		} else {
			newSelected = [...selectedOptions, clickedOption];
		}

		console.log('MultiSelect.selectOption', { clickedOption, before: selectedOptions, after: newSelected });

		onSelectionChange(newSelected);
	};

	const showCheckboxes = () => {
		expanded = true;
	};

	const closeCheckboxes = () => {
		expanded = false;
	};

	let checkboxClass = $state('checkboxes');
	$effect(() => {
		checkboxClass = classnames('checkboxes', { hidden: !expanded });
	});

	$effect(() => {
		filteredOptions = options.filter((option) =>
			option.display.toLowerCase().includes(search.toLowerCase())
		);
	});
</script>

<div use:clickOutside onclick_outside={closeCheckboxes}>
	<TextInput bind:value={search} placeholder="Search" on:click={showCheckboxes} />

	<Popover show={expanded}>
		{#each filteredOptions as option}
			<label for={option.value}>
				<input
					type="checkbox"
					id={option.value}
					value={option.value}
					checked={selectedOptions.includes(option.value)}
					onclick={selectOption}
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

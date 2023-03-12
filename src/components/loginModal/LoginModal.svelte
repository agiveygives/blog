<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { loggedIn } from '@/stores/loggedIn';
	import { clickOutside } from '@/directives/onClickOutside';

	export let showModal = false;
	let mounted = false;
	let greeting = '';
	let email: string;
	let password: string;

	const scrollLock = (showModal) => {
		if (mounted) {
			const body = document.querySelector('body');
			body.style.overflow = showModal ? 'hidden' : 'auto';
		}
	};

	$: scrollLock(showModal);

	onMount(() => {
		mounted = true;
		scrollLock(showModal);
	});

	const handleSubmit = (e) => {
		const formData = new FormData(e.target);

		email = '';
		password = '';

		fetch('/api/auth/login', {
			method: 'post',
			body: formData
		})
			.then((response) => {
				if (response.ok) {
					loggedIn.set(true);
				} else {
					loggedIn.set(false);
				}
			})
			.catch(() => loggedIn.set(false))
			.finally(() => {
				showModal = false;
			});
	};

	var pattern = ['m', 'a', 'r', 'g', 'e'];
	var current = 0;

	const keyHandler = (event) => {
		if (event.key === 'Escape') {
			showModal = false;
		}

		if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
			current = 0;

			return;
		}

		current++;

		if (pattern.length === current) {
			current = 0;
			showModal = true;
		}
	};

	const randomGreeting = () => {
		const greetings = [
			'You look nice today!',
			'Hey, come here often?',
			"How you doin'?",
			'Fancy seeing you here!',
			'Nice to see you, today!'
		];

		return greetings[Math.floor(Math.random() * greetings.length)];
	};

	$: if (showModal) {
		greeting = randomGreeting();
	}
</script>

<svelte:window on:keydown={keyHandler} />

<div class={`modal-background ${showModal ? '' : 'hidden'}`}>
	<div class="modal-container">
		<button
			class="close"
			on:click={() => {
				showModal = false;
			}}
		>
			<Fa icon={faX} />
		</button>

		<div class="header">{greeting}</div>

		<div
			class="modal-content"
			use:clickOutside
			on:click_outside={() => {
				showModal = false;
			}}
		>
			<div class="bitmoji-container">
				<img class="bitmoji" src="/images/bitmoji/secret.png" alt="Andrew Givens Bitmoji shh" />
			</div>

			<form on:submit|preventDefault={handleSubmit}>
				<input type="email" name="email" bind:value={email} placeholder="email" />
				<input type="password" name="password" bind:value={password} placeholder="password" />
				<button type="submit">Login</button>
			</form>
		</div>
	</div>
</div>

<style>
	.hidden {
		display: none !important;
	}

	.modal-background {
		display: block;
		position: fixed;
		z-index: 99;
		padding-top: 100px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-container {
		background-color: var(--white);
		margin: auto;
		border: 1px solid #888;
		width: 80%;
	}

	.modal-header {
		padding: 0px 15px;
	}

	.modal-content {
		padding: 0px 20px 20px 20px;
		justify-content: center;
	}

	.close {
		color: var(--caribbean-current);
		background-color: transparent;
		border: none;
		cursor: pointer;
		float: right;
		margin: 10px;
	}

	.close:hover,
	.close:focus {
		color: var(--coral);
	}

	.header {
		text-align: center;
		padding: 10px 50px;
	}

	.bitmoji-container {
		justify-content: center;
		display: flex;
	}

	.bitmoji {
		height: 100px;
	}

	form {
		display: grid;
		grid-template-columns: 25%;
		grid-gap: 10px;
		justify-content: center;
	}

	@media screen and (max-width: 1000px) {
		form {
			grid-template-columns: 50%;
		}
	}

	@media screen and (max-width: 500px) {
		form {
			grid-template-columns: 90%;
		}
	}

	input {
		padding: 5px;
		border-radius: 5px;
		border: var(--mint) solid 2px;
		font-size: 16px;
	}

	input:focus,
	input:hover {
		border-color: var(--caribbean-current);
	}

	form > button {
		border: none;
		border-radius: 5px;
		background-color: var(--mint);
		color: var(--white);
		font-size: 16px;
		padding: 5px 0px;
	}

	form > button:hover,
	form > button:focus {
		cursor: pointer;
		background-color: var(--caribbean-current);
	}
</style>

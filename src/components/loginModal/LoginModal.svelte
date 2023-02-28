<script lang='ts'>
	let showModal = false;
	let email: string;
	let password: string;

	const handleSubmit = (e) => {
    const formData = new FormData(e.target);

		fetch('/api/login', {
			method: 'post',
			body: formData,
		})
			.then((response) => response.json())
			.then((response) => console.log(response.expiration))
			.finally(() => {
				showModal = false;
			});
	}

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
</script>

<svelte:window on:keydown={keyHandler} />

<div class={`modal-background ${showModal ? '' : 'hidden'}`}>
  <div class="modal-container">
		<div class="close">
			<button on:click={() => { showModal = false; }}>&times;</button>
		</div>

		<div>
			<form on:submit|preventDefault={handleSubmit}>
				<input type="email" name='email' bind:value={email} placeholder="enter email" />
				<input type="password" name='password' bind:value={password} placeholder="enter password" />
				<button type='submit'>Login</button>
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
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}

	.close {
		color: var(--carribean-current);
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}
</style>

<script lang="ts">
	import Fa from 'svelte-fa';
	import classnames from 'classnames';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import { loggedIn } from '@/stores/loggedIn';
	import Popover from '@/components/popover';
	import { clickOutside } from '@/directives/onClickOutside';

	let isPopoverVisible = false;

	onMount(() => {
		fetch('/api/auth/validate')
			.then((response) => {
				if (response.ok) {
					loggedIn.set(true);
				} else {
					loggedIn.set(false);
				}
			})
			.catch(() => loggedIn.set(false));
	});

	const logout = () => {
		fetch('/api/auth/logout').then((response) => {
			if (response.ok) {
				loggedIn.set(false);
			}
		});
	};

	const togglePopover = () => {
		isPopoverVisible = !isPopoverVisible;
	}

	const closePopover = () => {
		isPopoverVisible = false;
	}

	let duration = '300ms';
	let headerClass = 'sharp';
	let y = 0;

	const deriveClass = (y: number) => {
		if (y <= 0) {
			return 'sharp';
		}

		return 'rounded';
	};

	const setTransitionDuration = (node: HTMLElement) => {
		node.style.transitionDuration = duration;
	};

	$: headerClass = deriveClass(y);
</script>

<svelte:window bind:scrollY={y} />

<header use:setTransitionDuration class={headerClass}>
	<a href="/">
		<img src="/andrew.png" aria-label="Andrew Givens" alt="Andrew Givens" />
	</a>
	<nav>
		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/portfolio">Portfolio</a></li>
			<li><a href="/about">About Me</a></li>
		</ul>
	</nav>
	<div use:clickOutside on:click_outside={closePopover}>
			<button class="menu" on:click={togglePopover}><Fa icon={faBars} size="2x" /></button>
			<Popover show={isPopoverVisible}>
				<button class='menu-option'><a href='mailto:agivens1996@gmail.com'>Contact</a></button>
				{#if $loggedIn}
					<button class='menu-option' on:click={logout}>Log Out</button>
				{/if}
			</Popover>
	</div>
</header>

<style lang="scss">
	@import '@/scss/_variables.scss';

	header {
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		left: 0;
		display: grid;
		grid-template-columns: max-content auto max-content;
		grid-column-gap: 20px;
		align-items: center;
		background-color: $white;
		padding: 5px 10px;
		transition: border-radius 300ms linear, background-color 300ms linear;
		background-color: $white;
		$darkened-background: darken($white, 5%);

		.menu {
			color: $caribbean-current;
			background: inherit;
			border-radius: 50px;
			padding: 8px 10px;
			border: unset;
			cursor: pointer;

			&:hover {
				background-color: $darkened-background;
			}
		}
	}

	.sharp {
		border-radius: 0px;
	}

	.rounded {
		border-radius: 0px 0px 20px 20px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		background-color: $mint;
		$darkened-background: darken($mint, 5%);

		.menu {
			&:hover,
			&:focus {
				background-color: $darkened-background;
			}
		}
	}

	img {
		height: 80px;
	}

	ul {
		display: grid;
		grid-template-columns: max-content max-content max-content;
		text-align: center;
		color: $caribbean-current;
		font-weight: 600;
		list-style: none;
		padding: 0px;
		margin: 0px;

		li:not(:last-child) {
			padding-right: 10px;
			border-right: 1px solid $caribbean-current;
		}

		li:not(:first-child) {
			padding-left: 10px;
		}
	}

	li {
		a {
			color: $caribbean-current;
			text-decoration: none;
			display: block;
			position: relative;
			padding: 2px 0;
			text-decoration: none;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 0.1em;
				background-color: $caribbean-current;
				opacity: 0;
				transition: opacity 300ms, transform 300ms;
				opacity: 1;
				transform: scale(0);
				transform-origin: center;
			}

			&:hover::after, &:focus::after {
				opacity: 1;
				transform: translate3d(0, 0.2em, 0);
				transform: scale(1);
			}
		}
	}

	.menu-option {
		width: 100%;
		min-width: max-content;
		border: none;
		color: $caribbean-current;
		background-color: $white;
		font-size: 16px;
		padding: 10px 20px;

		&:hover {
			background-color: darken($white, 10%);
			cursor: pointer;
		}

		&:first-child {
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
		}

		&:last-child {
			border-bottom-right-radius: 5px;
			border-bottom-left-radius: 5px;
		}

		a {
			text-decoration: none;
			color: inherit;
		}
	}
</style>

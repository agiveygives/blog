<script lang="ts">
	export let duration = 0.2;
	export let placement: 'left' | 'right' | 'top' | 'bottom' = 'left';
	export let size = '300px';
	export let open = false;

	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa';
	import {
		faCaretLeft,
		faCaretRight,
		faCaretUp,
		faCaretDown
	} from '@fortawesome/free-solid-svg-icons';
	import classnames from 'classnames';

	let icon = faCaretRight;

	$: switch (placement) {
		case 'left':
			icon = faCaretRight;
			break;
		case 'right':
			icon = faCaretLeft;
			break;
		case 'top':
			icon = faCaretDown;
			break;
		case 'bottom':
			icon = faCaretUp;
			break;
		default:
			break;
	}

	const toggleDrawer = () => {
		open = !open;
	};

	let mounted = false;
	const dispatch = createEventDispatcher();

	$: style = `--duration: ${duration}s; --size: ${size};`;

	function scrollLock(open) {
		if (mounted) {
			const body = document.querySelector('body');
			body.style.overflow = open ? 'hidden' : 'auto';
		}
	}

	$: scrollLock(open);

	const handleClickAway = () => {
		closeDrawer();
	};

	const handleKeyToggle = (event: MouseEvent) => {
		if (event.key === 'Escape') {
			closeDrawer();
		}
	};

	const openDrawer = () => {
		open = true;
	};
	const closeDrawer = () => {
		open = false;
	};

	onMount(() => {
		mounted = true;
		scrollLock(open);
	});
</script>

<svelte:window on:keydown={handleKeyToggle} />

<button class={classnames('toggle', placement, { closed: !open })} on:click={toggleDrawer} {style}>
	<div class="toggle-icon" class:open {style}>
		<Fa {icon} />
	</div>
</button>

<div class="overlay" class:open on:click={handleClickAway} on:keydown={handleKeyToggle} />

<aside class="drawer" class:open {style}>
	<div class="panel {placement}" class:size>
		<slot />
	</div>
</aside>

<style>
	.toggle {
		position: fixed;
		height: 40px;
		width: 25px;
		border: none;
		cursor: pointer;
		z-index: 100;
		transition: all var(--duration) ease;
	}

	.closed {
		box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
	}

	.toggle.right {
		top: 50%;
		right: var(--size);
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}
	.closed.right {
		transform: translate(var(--size), 0);
	}
	.toggle.left {
		top: 50%;
		left: var(--size);
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.closed.left {
		transform: translate(calc(var(--size) * -1), 0);
	}

	.toggle-icon {
		transition: transform var(--duration) ease;
	}
	.toggle-icon.open {
		transform: rotate(180deg);
	}

	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: var(--size);
		z-index: -1;
		transition: z-index var(--duration) step-end;
	}

	.drawer.open {
		z-index: 99;
		transition: z-index var(--duration) step-start;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: rgba(100, 100, 100, 0.5);
		opacity: 0;
		transition: opacity var(--duration) ease;
	}

	.overlay.open {
		opacity: 1;
		z-index: 99;
	}

	.panel {
		position: fixed;
		width: 100%;
		height: 100%;
		background: var(--white);
		z-index: 3;
		transition: transform var(--duration) ease;
	}

	.panel.left {
		left: 0;
		transform: translate(-100%, 0);
	}

	.panel.right {
		right: 0;
		transform: translate(100%, 0);
	}

	.panel.top {
		top: 0;
		transform: translate(0, -100%);
	}

	.panel.bottom {
		bottom: 0;
		transform: translate(0, 100%);
	}

	.panel.left.size,
	.panel.right.size {
		max-width: var(--size);
	}

	.panel.top.size,
	.panel.bottom.size {
		max-height: var(--size);
	}

	.drawer.open .panel {
		transform: translate(0, 0);
	}
</style>

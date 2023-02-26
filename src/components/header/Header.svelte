<script>
  export let duration = "300ms";

  let headerClass = "sharp";
  let y = 0;

  function deriveClass(y) {
    if (y <= 0) {
      return 'sharp';
    }

		return 'rounded';
  }

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  $: headerClass = deriveClass(y);
</script>

<style>
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
		background-color: #f2f2f2;
		padding: 5px 10px;
    transition: border-radius 300ms linear, background-color 300ms linear;
	}

	.sharp {
		border-radius: 0px;
	}

	.rounded {
		border-radius: 0px 0px 20px 20px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		background-color: #00c49a;
	}

	img {
		height: 80px;
	}

	ul {
		display: grid;
		grid-template-columns: max-content max-content max-content;
		text-align: center;
		color: #156064;
		font-weight: 600;
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	ul > li:not(:last-child) {
		padding-right: 10px;
		border-right: 1px solid #156064;
	}

	ul > li:not(:first-child) {
		padding-left: 10px;
	}

	li > a {
		color: #156064;
		text-decoration: none;
		display: block;
		position: relative;
		padding: 2px 0;
		text-decoration: none;
	}

	li > a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.1em;
		background-color: #156064;
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
		opacity: 1;
		transform: scale(0);
		transform-origin: center;
	}

	li > a:hover::after,
	li > a:focus::after {
		opacity: 1;
		transform: translate3d(0, 0.2em, 0);
		transform: scale(1);
	}
</style>

<svelte:window bind:scrollY={y} />

<header use:setTransitionDuration class={headerClass}>
	<a href='/'>
		<img src='/andrew.png' aria-label='Andrew Givens' alt='Andrew Givens' />
	</a>
	<nav>
		<ul>
			<li><a href='/blog'>Blog</a></li>
			<li><a href='/portfolio'>Portfolio</a></li>
			<li><a href='/about'>About Me</a></li>
		</ul>
	</nav>
	<div>
	</div>
</header>

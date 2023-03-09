<script lang="ts">
	export let show = false;

	import classnames from 'classnames';

	$: popoverClasses = classnames({ popover: true, hidden: !show });
</script>

<div class={popoverClasses}>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	@import '@/scss/_variables.scss';

	.popover {
		position: relative;
	}

	.content {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
		background-color: $white;
		border-radius: 5px;
		position: absolute;
		right: 0;
		min-width: 100%;
	}
</style>

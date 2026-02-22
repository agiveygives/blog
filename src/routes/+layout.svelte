<script lang="ts">
	import type { DecodedIdToken } from 'firebase-admin/auth';

	import Header from '@/components/header';
	import LoginModal from '@/components/loginModal';
	interface Props {
		data: { user: DecodedIdToken };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	let loginOpen = $state(false);
</script>

<Header
	loggedIn={!!data.user}
	onLogin={() => {
		loginOpen = true;
	}}
/>

<LoginModal bind:showModal={loginOpen} />

{@render children?.()}

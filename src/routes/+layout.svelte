<script lang="ts">
	import type { DecodedIdToken } from 'firebase-admin/auth';
	export let data: { user: DecodedIdToken }

	import Header from '@/components/header';
	import LoginModal from '@/components/loginModal';

	let loginOpen = false;
</script>

<Header
	loggedIn={!!data.user}
	onLogin={() => {
		loginOpen = true;
	}}
/>

<LoginModal bind:showModal={loginOpen} />

<slot />

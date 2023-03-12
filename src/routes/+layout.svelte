<script lang="ts">
	import Header from '@/components/header';
	import LoginModal from '@/components/loginModal';

	let loginOpen = false;
</script>

<Header onLogin={() => { loginOpen = true; }} />

<LoginModal bind:showModal={loginOpen} />

<slot />

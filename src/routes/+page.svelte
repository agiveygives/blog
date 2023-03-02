<script lang='ts'>
  export let data;

	import { onMount } from 'svelte';
	import { redirectLocation } from '@/stores/redirectLocation';
	import Introduction from '@/components/introduction';
	import Experience from '@/components/experience';

	onMount(() => {
		redirectLocation.set('/');
	})
</script>

<Introduction />

<Experience companies={data.companies} />

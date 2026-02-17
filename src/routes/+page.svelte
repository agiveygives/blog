<script lang="ts">

	import Introduction from '@/components/introduction';
	import Experience from '@/components/experience';
	let { data } = $props();
</script>

<Introduction />

<Experience companies={data.companies} />

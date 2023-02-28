<script>
	/** @type {import('./$types').LayoutData} */
  export let data;

	import Introduction from '@/components/introduction';
	import Experience from '@/components/experience';
</script>

<Introduction />

<Experience companies={data.companies} />

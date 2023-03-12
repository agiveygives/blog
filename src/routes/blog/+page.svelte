<script lang='ts'>
	export let data;

	import { goto } from '$app/navigation';

	import Link from '@/components/link';
	import Pill from '@/components/pill';

	const formatDate = (date: string) => (
		(new Date(date))
			.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })
	);
</script>

<div class='page-content'>
	<ul>
		{#each data.blogs as blog}
			<li key={blog.id}>
				<button on:click={() => goto(`/blog/${blog.id}`)}>
					<div class='title'>
						<span>{blog.title}</span>
						<span class='authors'>by: {blog.authors}</span>
					</div>
					<div class='tags'>
						{#each blog.tags as tag}
							<Pill>{tag}</Pill>
						{/each}
					</div>

					<div class='publish-date'>
						{formatDate(blog.createdAt)}
					</div>

					<div class='description'>
						{blog.description}
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.page-content {
		align-items: center;
    width: 50%;
    margin: 100px auto;
	}

	@media screen and (max-width: 700px) {
		.page-content {
			width: 90%;
		}
	}

	ul {
		width: 100%;
		padding: 10px 0px;
	}

	li {
		width: 100%;
    list-style: none;
	}

	button {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-items: start;
		height: 100%;
    width: 100%;
    padding: 20px;
    background-color: var(--white);
    border: solid 1px var(--mint);
    border-radius: 10px;
		font-size: 16px;
		color: var(--caribbean-current);
		cursor: pointer;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
	}

	button:hover, button:focus, button:focus-within {
		border-color: var(--caribbean-current);
    box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
		transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
	}

	.title {
		display: flex;
		flex-wrap: wrap;
	}

	.authors {
		font-size: 12px;
		font-style: italic;
	}

	.tags {
		display: inline-flex;
    width: 100%;
    gap: 5px;
    justify-content: flex-end;
	}

	.publish-date {
		font-size: 14px;
		margin-bottom: 10px;
	}

	.description {
		grid-column: 1 / -1;
		text-align: left;
		font-size: 12px;
	}
</style>

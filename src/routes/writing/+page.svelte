<script lang="ts">
	import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';

	interface Post {
		title: string;
		description: string;
		date: Date;
		link: string;
	}

	const posts: Post[] = [
		{
			title: 'Launching Developer Accelerator',
			description: 'Rebuilding my portfolio site',
			date: new Date('Feb 28, 2026'),
			link: 'launching-devx'
		},
		{
			title: 'Redesign 2026',
			description: 'Rebuilding my portfolio site',
			date: new Date('Feb 16, 2026'),
			link: 'redesign-2026'
		},
		{
			title: "AI's frontend",
			description: 'Why LLMs are so popular',
			date: new Date('April 16, 2025'),
			link: 'ai-frontend'
		},
		{
			title: 'Inspired by',
			description: 'Why you should copy people',
			date: new Date('April 29, 2025'),
			link: 'inspired-by'
		}
	];

	const postsByYear = $derived(
		posts.reduce<Record<number, Post[]>>((acc, post) => {
			const year = post.date.getFullYear();
			if (!acc[year]) acc[year] = [];
			acc[year].push(post);
			return acc;
		}, {})
	);

	const sortedYears = $derived(
		Object.keys(postsByYear)
			.map(Number)
			.sort((a, b) => b - a)
	);
</script>

<a
	href="/"
	class="font-light text-sm  lg:pt-4 col-start-1 grid h-fit w-fit max-lg:mb-8 max-sm:col-span-12 sm:grid-flow-row md:row-span-2 lg:ml-8"
>
	Index
</a>
<section class="grid-centre w-full flex flex-col gap-8">
	{#each sortedYears as year}
		<div class="flex max-xl:flex-col">
			<div class="col-start-1 w-[3em] pt-4 text-sm text-muted sm:w-[7em]">{year}</div>
			<div class="col-start-2 flex grow flex-col divide-y">
				{#each [...postsByYear[year]].sort((a, b) => b.date.getTime() - a.date.getTime()) as post}
					<a href={`/writing/${post.link}`} class="group flex items-center justify-between py-3">
						<div class="flex items-center transition-all duration-300 ease-out">
							<p class="font-medium">{post.title}</p>
							<ArrowRightIcon
								class="ml-2 size-4 -translate-x-2 text-cyan-600 opacity-0 transition-all delay-200 duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-cyan-400"
							/>
						</div>
						<time class="text-muted-foreground min-w-15 text-right text-sm">
							{post.date.toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'short'
							})}
						</time>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</section>

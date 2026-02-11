<script lang="ts">
	let links = [
		{
			href: '/writing',
			label: 'writing'
		},
		{
			href: '/projects',
			label: 'projects'
		},
		{
			href: '/cv',
			label: 'cv / resume'
		},
		{
			href: '/work',
			label: 'work'
		},
		{
			href: '/volunteering',
			label: 'volunteering'
		}
	];
</script>

<ul class="grid-span-all grid min-w-0 max-md:grid-cols-3 sm:grid-flow-col">
	{#each links as link}
		<a
			href={link.href}
			class="bg-transparent p-3 text-center font-mono text-sm font-semibold uppercase odd:bg-neutral-50 hover:bg-neutral-100 dark:odd:bg-neutral-800/60 dark:hover:bg-neutral-800"
		>
			{link.label}
		</a>
	{/each}
</ul>

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

<ul class="grid-span-all grid min-w-0 grid-flow-col">
	{#each links as link}
		<a
			href={link.href}
			class="p-3 text-center font-mono font-semibold text-sm odd:bg-neutral-50 hover:bg-neutral-100 uppercase"
		>
			{link.label}
		</a>
	{/each}
</ul>

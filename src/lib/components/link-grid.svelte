<script lang="ts">
	let links = [
		{
			href: '/writing',
			label: 'WRITING'
		},
		{
			href: '/projects',
			label: 'PROJECTS'
		},
		{
			href: '/work',
			label: 'WORK'
		}
	];
</script>

<ul class="mb-12 grid grid-cols-1 sm:grid-cols-3 border sm:divide-x max-sm:divide-y">
	{#each links as link}
		<a
			href={link.href}
			class="p-3 text-center font-mono text-sm bg-white hover:invert"
		>
			{link.label}
		</a>
	{/each}
</ul>

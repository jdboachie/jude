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
			href: '/cv',
			label: 'CV/RESUME'
		},
		{
			href: '/work',
			label: 'WORK'
		},
		{
			href: '/volunteering',
			label: 'VOLUNTEERING'
		}
	];
</script>

<ul class="grid-centre grid min-w-0 grid-cols-1 sm:grid-cols-3">
	{#each links as link}
		<a
			href={link.href}
			class="p-3 text-center font-mono text-sm odd:bg-neutral-50 hover:bg-neutral-100"
		>
			{link.label}
		</a>
	{/each}
</ul>

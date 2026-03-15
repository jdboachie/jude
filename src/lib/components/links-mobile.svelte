<script lang="ts">
	let links = [
		{
			href: 'https://docs.google.com/document/d/1NQqm138mFAgGMw0Uoos4vTHVbGc0bUot/edit?usp=sharing&ouid=108028889967778196062&rtpof=true&sd=true',
			label: 'CV / resume'
		},
		{
			href: '/projects',
			label: 'projects'
		},
		{
			href: '/volunteering',
			label: 'volunteering'
		},
		{
			href: '/work',
			label: 'work'
		},
		{
			href: '/writing',
			label: 'writing'
		},
		{
			href: 'https://devaccelerator.notion.site',
			label: 'DevX'
		},
	];
</script>

<div class="grid-centre grid grid-cols-2 lg:grid-cols-3 max-md:space-y-4 space-y-1 justify-between">
	{#each links as link}
		<a
			href={link.href}
			class="flex w-fit items-center gap-4 rounded-full p-1.5 px-3 text-start text-sm font-medium text-muted capitalize transition-colors duration-250 ease-out bg-neutral-50/50 hover:bg-neutral-900/5 dark:hover:bg-neutral-100/10"
		>
			{link.label}
		</a>
	{/each}
</div>

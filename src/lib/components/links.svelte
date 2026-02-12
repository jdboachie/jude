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
		}
	];
</script>

<div
	class="col-start-1 ml-8 grid h-fit w-full max-lg:hidden max-sm:col-span-12 sm:grid-flow-row md:row-span-2"
>
	{#each links as link}
		<a
			href={link.href}
			class="flex w-full items-center gap-4 rounded-full bg-transparent p-1.5 px-3 text-start text-sm font-medium text-muted capitalize hover:bg-neutral-900/5 dark:hover:bg-neutral-100/10"
		>
			{link.label}
		</a>
	{/each}
</div>

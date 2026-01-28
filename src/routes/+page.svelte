<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	import Socials from '$lib/components/Socials.svelte';

	let date = new SvelteDate();

	const ghanaTime = $derived(
		date.toLocaleTimeString('en-GB', {
			timeZone: 'Africa/Accra',
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit',
			hour12: true
		})
	);

	$effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<main class="mt-22 antialiased">
	<div class="flex items-center justify-between pb-8">
		<div class="font-mono text-xs text-muted uppercase">
			{ghanaTime} •
			<a
				href="https://share.google/1qNdmRhFQVQNs0mCw"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-black"
			>
				KUMASI, GHANA
			</a>
		</div>
		<a class="font-mono text-xs text-muted hover:text-black" href="https://cal.com/judeboachie/15min">
			SCHEDULE A MEETING
		</a>
	</div>
	<p class="mb-12">
		Jude Boachie.
		<svg
			class="text-inline-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 12h.01" />
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<path d="M22 13a18.15 18.15 0 0 1-20 0" />
			<rect width="20" height="14" x="2" y="6" rx="2" />
		</svg>
		Software Engineer at
		<a
			href="https://amalitech.com"
			target="_blank"
			rel="noopener noreferrer"
			class="cursor-pointer transition-colors delay-300 duration-100 ease-out hover:text-[#ff5a00]"
		>
			Amalitech
		</a>.
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-inline-icon"
		>
			<path
				d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
			/>
			<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
		</svg>
		Fullstack web developer.
		<svg
			class="text-inline-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path
				d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
			/><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg
		>
		Bachelor's in Computer Engineering. Light of my world.
	</p>
	<!-- <Socials /> -->
	<span class="font-mono text-xs text-muted">ABOUT</span>
	<p class="mb-12">
		Versatile and detail-oriented software developer skilled in Python, Javascript/TypeScript, and
		Rust. Experienced in building efficient, maintainable, and user-friendly applications for both
		desktop and web. Strong focus on performance, reliability, and clean design. Quick to learn new
		technologies and effective in both independent and team-based projects.
	</p>
</main>

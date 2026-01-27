<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

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
	<p class="mb-4 font-mono text-xs text-muted uppercase">{ghanaTime} - KUMASI, GHANA</p>
	<p class="mb-12">
		Jude Boachie. Software Engineer at
		<svg
			class="inline-block size-6"
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="currentColor"
			viewBox="0 0 256 256"
			><path
				d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
			></path></svg
		>
		<a
			href="https://amalitech.com"
			target="_blank"
			rel="noopener noreferrer"
			class="cursor-pointer transition-colors duration-300 ease-out hover:text-[#ff5a00]"
		>
			Amalitech
		</a>.
		Fullstack web developer. Bachelor's in Computer Engineering. Light of the world.
	</p>
	<span class="font-mono text-xs text-muted">ABOUT</span>
	<p class="mb-12">
		Versatile and detail-oriented software developer skilled in Python, Javascript/TypeScript, and
		Rust. Experienced in building efficient, maintainable, and user-friendly applications for both
		desktop and web. Strong focus on performance, reliability, and clean design. Quick to learn new
		technologies and effective in both independent and team-based projects.
	</p>
</main>

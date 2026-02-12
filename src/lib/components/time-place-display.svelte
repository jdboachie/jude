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

<div class="inline-flex gap-2 text-xs text-muted">
	<time class="font-mono uppercase">{ghanaTime}</time>•
	<a
		href="https://maps.app.goo.gl/8TYDCv2rpD9F3C8u7"
		target="_blank"
		rel="noopener noreferrer"
		class="font-mono hover:text-black"
	>
		Kumasi
	</a>
</div>

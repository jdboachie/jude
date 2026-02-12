<script lang="ts">
	let { children } = $props();
</script>

<article class="article-container flex flex-col gap-8">
	<nav class="col-start-1 col-span-2 h-fit text-right"><a href="/">Index</a></nav>
	<div class="grid-centre">{@render children()}</div>
</article>

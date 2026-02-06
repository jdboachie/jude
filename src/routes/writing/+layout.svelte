<script lang="ts">
	let { children } = $props();
</script>

<nav class=""><a href="/">Index</a></nav>
<article class="article-container flex flex-col gap-8">{@render children()}</article>

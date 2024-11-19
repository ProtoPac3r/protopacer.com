<script>
	let { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="container mx-auto">
	<h1>Quotes</h1>
	<ul class="quotes-list">
		{#each data.quotes as quote}
			<li class="quote-item">
				<div class="quote-title">{quote.title}</div>
				<div class="quote-content container max-w-md mx-auto border p-5">
					{@render quote.Component()}
				</div>
			</li>
		{/each}
	</ul>
</div>

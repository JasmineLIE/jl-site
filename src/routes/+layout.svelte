<script>
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Nav links={data.nav.data.links} />

<main>
	<slot />
</main>

<section>
	<footer>
		<p>Jasmine Ly © 2023 - {new Date().getFullYear()}</p>
	</footer>
</section>

<style>
	@import "open-props/style";
	@import "open-props/normalize";
	@import "open-props/gray-hsl";

	@font-face {
		font-family: 'Anton';
		font-style: normal;
		font-weight: 100 900;
		font-display: swap;
		src: local(''), url('/Anton.woff2') format('woff2');
		unicode-range: U+20-7E, U+E4, U+E5, U+F6;
	}

	/* Define colors scheme for light and dark mode */
	:root {
		--brand: var(--lime-10);
		--text-1: var(--sand-9);
		--text-2: var(--lime-11);
		--surface-1: var(--sand-1);
		--surface-2: var(--lime-1);
		--surface-3: var(--lime-4);
		--surface-4: var(--lime-4);
		--surface-shadow: var(--gray-8-hsl);
		--shadow-strength: 2%;
		
	}


	:global(section) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-10);
		padding: var(--size-11);
	}

	:global(section:nth-child(odd)) {
		background: var(--sand-2);
	}
	
</style>

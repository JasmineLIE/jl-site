<script>
	import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<nav>
	
	<ul>
		<p><b>Jasmine Ly</b></p>
		{#each links as link}
			<li>
				<PrismicLink field={link.link}>{link.label}</PrismicLink>

			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		
		background-image: var(--gradient-26);
		filter: var(--noise-filter-1);
		z-index: 1;
		width: 100%;
		padding: var(--size-4);
		box-shadow: var(--shadow-1);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
		font-size: var(--font-size-1);
		text-transform: uppercase;
		font-weight: var(--font-weight-5);
		color: black;
	}

	ul :global(p) {
		
		font-size: 20px;
	}

	li :global(a) {
		color: var(--text-2);
		padding: 0 0 5px;
	}

	li :global(a:hover) {
		text-decoration: none;
		box-shadow: inset 0 -2px var(--brand), 0 2px var(--brand);
	}
</style>
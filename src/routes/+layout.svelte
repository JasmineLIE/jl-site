
<script>
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import SocialIcons from '@rodneylab/svelte-social-icons';
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

<div class="footer">
	<footer>

		<p>Jasmine Ly © 2023 - {new Date().getFullYear()}</p>
		<p>This site was created with Sveltekit and Open Props</p>
		<article>
			
		</article>
		<div class = "socials" >
			<a href="mailto:jjasminely@gmail.com"class="button" 
			
			>	<SocialIcons network="email" /></a>

			<a href="https://github.com/JasmineLIE/" class="button" 
			>	<SocialIcons network="github" /></a>

			<a href="https://motherlusa.itch.io" class="button" 
			>	<SocialIcons network="itch.io" /></a>

			<a href="https://www.linkedin.com/in/jasmine-ly-on-call/" class="button" 
			>	<SocialIcons network="linkedin" /></a>
		
			
		</div>
	</footer>

</div>



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
	
.button {
	padding: 10px;
	&:is(:hover) {
		animation: var(--animation-blink);
	}
}
	.socials {
		
		display: -moz-grid-line;
		justify-content: center;
		padding: 20px;
		
		

		&:is(:hover, :focus) {
		
			cursor: pointer;
		}
	}
	
	:root {

		--brand: var(--violet-10);
		--text-1: var(--violet-1);
		--text-2: var(--violet-11);
		--surface-1: black;
		--surface-2: var(--violet--1);
		--surface-3: var(--violet--4);
		--surface-4: var(--violet--4);
		--surface-shadow: var(--gray-8-hsl);
		--shadow-strength: 5%;
		
	}
	
	:global(section) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-6);
		padding: var(--size-9);
	}


	:global(section:nth-child(even)) {
		color: var(--violet-8);
		background-image: var(--gradient-26);
	}
.footer {
	display: flex;
	text-align: center;
		flex-direction: column;
		align-items: center;
		gap: var(--size-10);
		padding: var(--size-9);
		color: var(--violet--1);
}

	
</style>

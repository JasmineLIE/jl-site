<script>
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.HeroTextSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} /> 
	<PrismicRichText field={slice.primary.subtitle} />
	<!--to let the HUB editor changes be made onto the simulation in Slicemachine-->
</section>

<style>
	section {
	
		background-size: cover;
		text-transform: uppercase;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		gap: var(--size-4);
		padding: var(--size-14) 0 var(--size-13);
		

	}

	section :global(h1) {
color: var(--sand-1);
text-align: right;
font-size: var(--size-11);
line-height: var(--size-11);
width: min-content;
	}

	section :global(p) {
		color: var(--sand-9);
		text-align: left;
		font-size: var(--size-7);
		line-height: 120%;
		width: min-content;
	}
</style>
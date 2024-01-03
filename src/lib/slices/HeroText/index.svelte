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


	@media screen and (orientation: portrait) {
		section {
			background-repeat:no-repeat;
			background-size:cover;
			background-position: center;
			background-image: var(--gradient-26);
			background-image: url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHU5OHh5MHhzeHU3czFoa2xoNmg0eHk5d2d0bWR1eWNudnIzM2ZtOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AfbVgiWXKhAV0npwG/giphy.gif);
	text-transform: uppercase;


}

section :global(h1) {
color: var(--sand-1);
text-align: center;
font-size: var(--size-9);
	
	}
section :global(p) {
		color: var(--sand-9);
		text-align: center;
		font-size: var(--size-3);
	
		
	}
	}

	@media screen and (orientation: landscape) {
		section {
			background-image: var(--gradient-26);
		
			background-image: url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHU5OHh5MHhzeHU3czFoa2xoNmg0eHk5d2d0bWR1eWNudnIzM2ZtOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AfbVgiWXKhAV0npwG/giphy.gif);
			
		
			
			background-position: center;
		

	
	
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
		color: var(--indigo-2);
		text-align: left;
		font-size: var(--size-7);
		line-height: 120%;
		width: min-content;
	}
	}
	



	
</style>
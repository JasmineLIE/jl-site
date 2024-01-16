<script>
	import { PrismicImage, PrismicLink } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.TallImageGallerySlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class = "images"> 
		{#each slice.items as images, index}
			<article class = "image"> 
				<PrismicLink field ={images.link}><PrismicImage field={images.image}/></PrismicLink>
				
			</article>
		{/each}

	</div>
</section>

<style>
	.images {
		display:flex;
		
		
		gap: var(--size-6);
		width: 100%;
		height:auto ;
		
		
	}
.images :global(img) {
	object-fit:cover;
	border-radius: var(--radius-2);
}
	article {
		&:is(:hover, :focus) {

			animation: var(--animation-blink);
			cursor: pointer;
			@nest .light & {
			  text-shadow: 0 1px 0 var(--sand-8);
			}
		  }
	}

	
	
</style>
<script>
	import { PrismicImage, PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.SpotlightSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

		

		<PrismicRichText field={slice.primary.title} />

	
	
	<article>
	
		
	
	
		
		<div class="spotlight">
			<PrismicRichText field={slice.primary.desc}/>
		
			
		</div>
		<div class="image">
			<PrismicImage field={slice.primary.image}/>
		</div>
	
	</article>
	

</section>
<style>
@media screen and (orientation: landscape) {
	article {  
		
		background-image:var(--gradient-26);
		
		color: black;
		display: flex;
		align-items: center;
		
		padding: var(--size-4);
		box-shadow: var(--inner-shadow-4);
		
		border-radius: var(--radius-conditional-3);

		
	}
	.spotlight {
		padding-right: 30px;
	
		padding-left: 20px;
		max-width: 50%;
		text-align: justify;
		


	
	}
.image :global(img) {
	object-fit:cover;
	border-radius: var(--radius-5);
	padding: var(--size-4);
	max-width: 500px;
  
}
}


@media screen and (orientation: portrait) {
	article {  
		
		background-image:var(--gradient-26);
		
		color: black;
		
		align-items: center;
		
		padding: var(--size-12);
		box-shadow: var(--inner-shadow-4);
		
		border-radius: var(--radius-conditional-3);

		
	}
	.spotlight {
		

 padding: var(--size-10);

  width:100%;
  



	
	}
.image {

	max-width: 500px;
  
}
}
	
</style>

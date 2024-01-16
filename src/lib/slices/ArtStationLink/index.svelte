<script>
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.ArtStationLinkSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} /> 


	
	<a href="https://www.artstation.com/jasminelusaly/albums/2515649">
		<button class="button">
		<PrismicRichText field={slice.primary.subtitle} /> 
	</button>
	</a>
	<!--to let the HUB editor changes be made onto the simulation in Slicemachine-->
</section>

<style>


	

	@media screen and (orientation: landscape) {
		section {
		
			background-position: center;
			background-position-x:	-180px;
			width:60%;
			background-image: url(https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png);
		
		
			text-transform: uppercase;
			
			
			gap: var(--size-4);
		

	

		}
section :global(h1) {
color: var(--violet-1);
text-align: right;
font-size: var(--size-11);
line-height: var(--size-11);



	}
section :global(p) {
	
		text-align: center;
		font-size: var(--size-7);
		
	
	}
	}
	
.button {
	color: var(--violet-3);
	background-color: black;
	padding: 20px;
	border-radius: var(--radius-3);
		border: var(--border-size-1) solid var(--violet-1);
	&:is(:hover, :focus) {
		color: black;
			text-decoration: none;
			animation: var(--animation-shake-y);
			cursor: pointer;
			background-image: var(--gradient-26);
			
			@nest .light & {
			  text-shadow: 0 1px 0 var(--sand-8);
			}
		  }
}


	
</style>
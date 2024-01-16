<script>
	import { PrismicRichText, PrismicImage } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.TitleSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} />
	<div class="container">
		<div class="portrait">
			<PrismicImage field={slice.primary.portrait}/>
		
		</div>
		
		
			<div class = "textBlocks">
		
				{#each slice.items as text, index}
		
				<article class="text">
					<PrismicRichText field={text.text}/>
				</article>
		
		
				{/each}
				</div>
	</div>

</section>

<style>
	.container{

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.textBlocks {
		width: fit-content;
	
		border-radius: var(--radius-3);
		border: var(--border-size-1) solid var(--violet-3);
		padding: var(--size-4);
		box-shadow: var(--shadow-3);
		

	}


	.text{
		margin-bottom: var(--size-4);
		color: black;
 		text-align: justify;
		 display: flex;
	}

.portrait :global(img){
	width:400px;
	
	object-fit:cover;
	border-radius: var(--radius-round);
	padding: var(--size-4);
	
}
</style>

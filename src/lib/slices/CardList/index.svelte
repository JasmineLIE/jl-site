
<script>
		import { PrismicImage, PrismicLink, PrismicRichText } from "@prismicio/svelte";
		
		
	/** @type {import("@prismicio/client").Content.CardListSlice} */
	export let slice;



	
</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} /> 
	
	<div class = "cards">
		
		{#each slice.items as card, index}
	
		
		<article class="card">
			<PrismicLink field={card.link}>
			<header>
	
				<PrismicRichText field={card.title} />
			</header>
			<PrismicRichText field={card.description} />
	
			<footer>
			 <PrismicImage field={card.image} />
				
				
			</footer>
		</PrismicLink>
		</article>
	
	
	{/each}

	</div>

</section>

<style>

  @media screen and (orientation: portrait) {
	.cards {
		display:grid;
	
	
		gap: var(--size-6);
		width:300px;

	}
  }
@media screen and (orientation: landscape) {
	.cards {
		display:grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

		gap: var(--size-6);
		width:70%;

	}
}
article :global(p) {
	color: var(--violet-6);
}
article :global(h3) {
	color: var(--violet-6);
}

	article{
		
		border-radius: var(--radius-3);
		border: var(--border-size-1) solid var(--violet-3);
		padding: var(--size-4);
		box-shadow: var(--shadow-3);
		background-color: black;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
		box-shadow: var(--inner-shadow-4);

		&:is(:hover, :focus) {
			

	text-decoration: none;
	animation: var(--animation-blink);
    cursor: pointer;
    background-image: var(--gradient-26);
    
    @nest .light & {
      text-shadow: 0 1px 0 var(--sand-8);
    }
  }
	}


	
</style>

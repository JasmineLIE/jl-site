
<script>
		import { PrismicImage, PrismicLink, PrismicRichText } from "@prismicio/svelte";

		
	/** @type {import("@prismicio/client").Content.CardListSlice} */
	export let slice;


	
	$: wide = slice.primary.wide;
	
</script>


<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} /> 
	
	<div class = "cards" class:wide>
		
		{#each slice.items as card, index}
	

		<article class="card">
			<header>
			
			
			
				<PrismicRichText field={card.title} />
			</header>
			<PrismicRichText field={card.description} />
	
			<footer>
				<PrismicLink field={card.link}> <PrismicImage field={card.image} /></PrismicLink>
	
				
			</footer>
		
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
	
	article{
		
		border-radius: var(--radius-3);
		padding: var(--size-4);
		box-shadow: var(--shadow-3);
		background-color: black;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-3);
		box-shadow: var(--inner-shadow-4);

		&:is(:hover, :focus) {
			
	animation: var(--animation-blink);
    cursor: pointer;
    color: white;
    background-image: var(--gradient-26);
    
    @nest .light & {
      text-shadow: 0 1px 0 var(--sand-8);
    }
  }
	}

	

	.cards.wide {
		grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));

	}
	.wide article {
		padding: var(--size-7);
	}

	.wide header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: var(--size-5);
		margin-block: var(--size-2);
	}

	.wide header :global(img) {
		margin: 0;
	}

	
</style>

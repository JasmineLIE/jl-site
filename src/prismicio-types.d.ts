// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Nav → Links*
 */
export interface NavDocumentDataLinksItem {
	/**
	 * Link field in *Nav → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Nav → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Nav documents
 */
interface NavDocumentData {
	/**
	 * Links field in *Nav*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavDocumentDataLinksItem>>;
}

/**
 * Nav document from Prismic
 *
 * - **API ID**: `nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavDocumentData>,
	'nav',
	Lang
>;

type PageDocumentDataSlicesSlice = SpotlightSlice | CardListSlice | HeroTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

export type AllDocumentTypes = NavDocument | PageDocument;

/**
 * Primary content in *CardList → Primary*
 */
export interface CardListSliceDefaultPrimary {
	/**
	 * Heading field in *CardList → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;
}

/**
 * Primary content in *CardList → Items*
 */
export interface CardListSliceDefaultItem {
	/**
	 * Title field in *CardList → Items*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Description field in *CardList → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *CardList → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Name field in *CardList → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Link field in *CardList → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for CardList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardListSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<CardListSliceDefaultPrimary>,
	Simplify<CardListSliceDefaultItem>
>;

/**
 * Primary content in *CardList → Primary*
 */
export interface CardListSliceHeaderImagePrimary {
	/**
	 * Heading field in *CardList → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.TitleField;

	/**
	 * Wide field in *CardList → Primary*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: card_list.primary.wide
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	wide: prismic.BooleanField;
}

/**
 * Primary content in *CardList → Items*
 */
export interface CardListSliceHeaderImageItem {
	/**
	 * Title field in *CardList → Items*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Description field in *CardList → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *CardList → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Link field in *CardList → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_list.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Header Image variation for CardList Slice
 *
 * - **API ID**: `headerImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardListSliceHeaderImage = prismic.SharedSliceVariation<
	'headerImage',
	Simplify<CardListSliceHeaderImagePrimary>,
	Simplify<CardListSliceHeaderImageItem>
>;

/**
 * Slice variation for *CardList*
 */
type CardListSliceVariation = CardListSliceDefault | CardListSliceHeaderImage;

/**
 * CardList Shared Slice
 *
 * - **API ID**: `card_list`
 * - **Description**: CardList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardListSlice = prismic.SharedSlice<'card_list', CardListSliceVariation>;

/**
 * Primary content in *HeroText → Primary*
 */
export interface HeroTextSliceDefaultPrimary {
	/**
	 * Title field in *HeroText → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_text.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Subtitle field in *HeroText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_text.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subtitle: prismic.RichTextField;
}

/**
 * Default variation for HeroText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroTextSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *HeroText*
 */
type HeroTextSliceVariation = HeroTextSliceDefault;

/**
 * HeroText Shared Slice
 *
 * - **API ID**: `hero_text`
 * - **Description**: HeroText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroTextSlice = prismic.SharedSlice<'hero_text', HeroTextSliceVariation>;

/**
 * Primary content in *Spotlight → Primary*
 */
export interface SpotlightSliceDefaultPrimary {
	/**
	 * Image field in *Spotlight → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spotlight.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *Spotlight → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spotlight.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Desc field in *Spotlight → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spotlight.primary.desc
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	desc: prismic.RichTextField;
}

/**
 * Default variation for Spotlight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpotlightSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SpotlightSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Spotlight*
 */
type SpotlightSliceVariation = SpotlightSliceDefault;

/**
 * Spotlight Shared Slice
 *
 * - **API ID**: `spotlight`
 * - **Description**: Spotlight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpotlightSlice = prismic.SharedSlice<'spotlight', SpotlightSliceVariation>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
	/**
	 * Title field in *Text → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;
}

/**
 * Primary content in *Text → Items*
 */
export interface TextSliceDefaultItem {
	/**
	 * Paragraph field in *Text → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.items[].paragraph
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	paragraph: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextSliceDefaultPrimary>,
	Simplify<TextSliceDefaultItem>
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			NavDocument,
			NavDocumentData,
			NavDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			AllDocumentTypes,
			CardListSlice,
			CardListSliceDefaultPrimary,
			CardListSliceDefaultItem,
			CardListSliceHeaderImagePrimary,
			CardListSliceHeaderImageItem,
			CardListSliceVariation,
			CardListSliceDefault,
			CardListSliceHeaderImage,
			HeroTextSlice,
			HeroTextSliceDefaultPrimary,
			HeroTextSliceVariation,
			HeroTextSliceDefault,
			SpotlightSlice,
			SpotlightSliceDefaultPrimary,
			SpotlightSliceVariation,
			SpotlightSliceDefault,
			TextSlice,
			TextSliceDefaultPrimary,
			TextSliceDefaultItem,
			TextSliceVariation,
			TextSliceDefault
		};
	}
}

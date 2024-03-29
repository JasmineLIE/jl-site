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

type PageDocumentDataSlicesSlice =
	| ArtStationLinkSlice
	| TallImageGallerySlice
	| ImageGallerySlice
	| TitleSlice
	| SpotlightSlice
	| CardListSlice
	| HeroTextSlice;

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
 * Primary content in *ArtStationLink → Primary*
 */
export interface ArtStationLinkSliceDefaultPrimary {
	/**
	 * Title field in *ArtStationLink → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: art_station_link.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Subtitle field in *ArtStationLink → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: art_station_link.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subtitle: prismic.RichTextField;
}

/**
 * Default variation for ArtStationLink Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtStationLinkSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ArtStationLinkSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ArtStationLink*
 */
type ArtStationLinkSliceVariation = ArtStationLinkSliceDefault;

/**
 * ArtStationLink Shared Slice
 *
 * - **API ID**: `art_station_link`
 * - **Description**: ArtStationLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtStationLinkSlice = prismic.SharedSlice<
	'art_station_link',
	ArtStationLinkSliceVariation
>;

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
 * Slice variation for *CardList*
 */
type CardListSliceVariation = CardListSliceDefault;

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
 * Primary content in *ImageGallery → Items*
 */
export interface ImageGallerySliceDefaultItem {
	/**
	 * image field in *ImageGallery → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * link field in *ImageGallery → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<ImageGallerySliceDefaultItem>
>;

/**
 * Slice variation for *ImageGallery*
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;

/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: ImageGallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice = prismic.SharedSlice<'image_gallery', ImageGallerySliceVariation>;

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
 * Primary content in *TallImageGallery → Items*
 */
export interface TallImageGallerySliceDefaultItem {
	/**
	 * image field in *TallImageGallery → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tall_image_gallery.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * link field in *TallImageGallery → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tall_image_gallery.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for TallImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TallImageGallerySliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<TallImageGallerySliceDefaultItem>
>;

/**
 * Slice variation for *TallImageGallery*
 */
type TallImageGallerySliceVariation = TallImageGallerySliceDefault;

/**
 * TallImageGallery Shared Slice
 *
 * - **API ID**: `tall_image_gallery`
 * - **Description**: TallImageGallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TallImageGallerySlice = prismic.SharedSlice<
	'tall_image_gallery',
	TallImageGallerySliceVariation
>;

/**
 * Primary content in *Title → Primary*
 */
export interface TitleSliceDefaultPrimary {
	/**
	 * Title field in *Title → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: title.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Portrait field in *Title → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: title.primary.portrait
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	portrait: prismic.ImageField<never>;
}

/**
 * Primary content in *Title → Items*
 */
export interface TitleSliceDefaultItem {
	/**
	 * text field in *Title → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: title.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Default variation for Title Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TitleSliceDefaultPrimary>,
	Simplify<TitleSliceDefaultItem>
>;

/**
 * Slice variation for *Title*
 */
type TitleSliceVariation = TitleSliceDefault;

/**
 * Title Shared Slice
 *
 * - **API ID**: `title`
 * - **Description**: Title
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSlice = prismic.SharedSlice<'title', TitleSliceVariation>;

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
			ArtStationLinkSlice,
			ArtStationLinkSliceDefaultPrimary,
			ArtStationLinkSliceVariation,
			ArtStationLinkSliceDefault,
			CardListSlice,
			CardListSliceDefaultPrimary,
			CardListSliceDefaultItem,
			CardListSliceVariation,
			CardListSliceDefault,
			HeroTextSlice,
			HeroTextSliceDefaultPrimary,
			HeroTextSliceVariation,
			HeroTextSliceDefault,
			ImageGallerySlice,
			ImageGallerySliceDefaultItem,
			ImageGallerySliceVariation,
			ImageGallerySliceDefault,
			SpotlightSlice,
			SpotlightSliceDefaultPrimary,
			SpotlightSliceVariation,
			SpotlightSliceDefault,
			TallImageGallerySlice,
			TallImageGallerySliceDefaultItem,
			TallImageGallerySliceVariation,
			TallImageGallerySliceDefault,
			TitleSlice,
			TitleSliceDefaultPrimary,
			TitleSliceDefaultItem,
			TitleSliceVariation,
			TitleSliceDefault
		};
	}
}

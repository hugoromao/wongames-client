/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GameFiltersInput, ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_data_attributes_gallery_data_attributes {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGameBySlug_games_data_attributes_gallery_data {
  __typename: "UploadFileEntity";
  attributes: QueryGameBySlug_games_data_attributes_gallery_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: QueryGameBySlug_games_data_attributes_gallery_data[];
}

export interface QueryGameBySlug_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGameBySlug_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryGameBySlug_games_data_attributes_cover_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryGameBySlug_games_data_attributes_cover_data | null;
}

export interface QueryGameBySlug_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryGameBySlug_games_data_attributes_developers_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryGameBySlug_games_data_attributes_developers_data[];
}

export interface QueryGameBySlug_games_data_attributes_publisher_data_attributes {
  __typename: "Publisher";
  name: string;
}

export interface QueryGameBySlug_games_data_attributes_publisher_data {
  __typename: "PublisherEntity";
  attributes: QueryGameBySlug_games_data_attributes_publisher_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_publisher {
  __typename: "PublisherEntityResponse";
  data: QueryGameBySlug_games_data_attributes_publisher_data | null;
}

export interface QueryGameBySlug_games_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface QueryGameBySlug_games_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: QueryGameBySlug_games_data_attributes_categories_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: QueryGameBySlug_games_data_attributes_categories_data[];
}

export interface QueryGameBySlug_games_data_attributes_platforms_data_attributes {
  __typename: "Platform";
  name: string;
}

export interface QueryGameBySlug_games_data_attributes_platforms_data {
  __typename: "PlatformEntity";
  attributes: QueryGameBySlug_games_data_attributes_platforms_data_attributes | null;
}

export interface QueryGameBySlug_games_data_attributes_platforms {
  __typename: "PlatformRelationResponseCollection";
  data: QueryGameBySlug_games_data_attributes_platforms_data[];
}

export interface QueryGameBySlug_games_data_attributes {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGameBySlug_games_data_attributes_gallery | null;
  cover: QueryGameBySlug_games_data_attributes_cover | null;
  developers: QueryGameBySlug_games_data_attributes_developers | null;
  publisher: QueryGameBySlug_games_data_attributes_publisher | null;
  categories: QueryGameBySlug_games_data_attributes_categories | null;
  platforms: QueryGameBySlug_games_data_attributes_platforms | null;
}

export interface QueryGameBySlug_games_data {
  __typename: "GameEntity";
  attributes: QueryGameBySlug_games_data_attributes | null;
}

export interface QueryGameBySlug_games {
  __typename: "GameEntityResponseCollection";
  data: QueryGameBySlug_games_data[];
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games | null;
}

export interface QueryGameBySlugVariables {
  filters: GameFiltersInput;
}

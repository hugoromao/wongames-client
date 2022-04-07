/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_data_attributes_section_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_highlight_background_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryRecommended_recommended_data_attributes_section_highlight_background_data | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryRecommended_recommended_data_attributes_section_highlight_floatImage_data | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecommended_recommended_data_attributes_section_highlight_background;
  floatImage: QueryRecommended_recommended_data_attributes_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data[];
}

export interface QueryRecommended_recommended_data_attributes_section_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryRecommended_recommended_data_attributes_section_games_data_attributes_cover | null;
  developers: QueryRecommended_recommended_data_attributes_section_games_data_attributes_developers | null;
  price: number;
}

export interface QueryRecommended_recommended_data_attributes_section_games_data {
  __typename: "GameEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_games_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games {
  __typename: "GameRelationResponseCollection";
  data: QueryRecommended_recommended_data_attributes_section_games_data[];
}

export interface QueryRecommended_recommended_data_attributes_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecommended_recommended_data_attributes_section_highlight | null;
  games: QueryRecommended_recommended_data_attributes_section_games | null;
}

export interface QueryRecommended_recommended_data_attributes {
  __typename: "Recommended";
  section: QueryRecommended_recommended_data_attributes_section;
}

export interface QueryRecommended_recommended_data {
  __typename: "RecommendedEntity";
  attributes: QueryRecommended_recommended_data_attributes | null;
}

export interface QueryRecommended_recommended {
  __typename: "RecommendedEntityResponse";
  data: QueryRecommended_recommended_data | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}

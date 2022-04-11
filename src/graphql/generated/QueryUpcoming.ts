/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcomingGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upcomingGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes_cover_data_attributes | null;
}

export interface QueryUpcoming_upcomingGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_upcomingGames_data_attributes_cover_data | null;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes_developers_data_attributes | null;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryUpcoming_upcomingGames_data_attributes_developers_data[];
}

export interface QueryUpcoming_upcomingGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryUpcoming_upcomingGames_data_attributes_cover | null;
  developers: QueryUpcoming_upcomingGames_data_attributes_developers | null;
  price: number;
}

export interface QueryUpcoming_upcomingGames_data {
  __typename: "GameEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes | null;
}

export interface QueryUpcoming_upcomingGames {
  __typename: "GameEntityResponseCollection";
  data: QueryUpcoming_upcomingGames_data[];
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background_data_attributes | null;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background_data | null;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes | null;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage_data | null;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_background;
  floatImage: QueryUpcoming_sections_data_attributes_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcoming_sections_data_attributes_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_sections_data_attributes_upcomingGames_highlight | null;
}

export interface QueryUpcoming_sections_data_attributes {
  __typename: "Home";
  upcomingGames: QueryUpcoming_sections_data_attributes_upcomingGames | null;
}

export interface QueryUpcoming_sections_data {
  __typename: "HomeEntity";
  attributes: QueryUpcoming_sections_data_attributes | null;
}

export interface QueryUpcoming_sections {
  __typename: "HomeEntityResponse";
  data: QueryUpcoming_sections_data | null;
}

export interface QueryUpcoming {
  upcomingGames: QueryUpcoming_upcomingGames | null;
  sections: QueryUpcoming_sections | null;
}

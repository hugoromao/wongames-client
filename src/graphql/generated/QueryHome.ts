/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_banners_data_attributes_image_data_attributes | null;
}

export interface QueryHome_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_banners_data_attributes_image_data | null;
}

export interface QueryHome_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_data_attributes_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners_data_attributes {
  __typename: "Banner";
  image: QueryHome_banners_data_attributes_image;
  title: string;
  subtitle: string;
  button: QueryHome_banners_data_attributes_button | null;
  ribbon: QueryHome_banners_data_attributes_ribbon | null;
}

export interface QueryHome_banners_data {
  __typename: "BannerEntity";
  attributes: QueryHome_banners_data_attributes | null;
}

export interface QueryHome_banners {
  __typename: "BannerEntityResponseCollection";
  data: QueryHome_banners_data[];
}

export interface QueryHome_newGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_newGames_data_attributes_cover_data_attributes | null;
}

export interface QueryHome_newGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_newGames_data_attributes_cover_data | null;
}

export interface QueryHome_newGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryHome_newGames_data_attributes_developers_data_attributes | null;
}

export interface QueryHome_newGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryHome_newGames_data_attributes_developers_data[];
}

export interface QueryHome_newGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_newGames_data_attributes_cover | null;
  developers: QueryHome_newGames_data_attributes_developers | null;
  price: number;
}

export interface QueryHome_newGames_data {
  __typename: "GameEntity";
  attributes: QueryHome_newGames_data_attributes | null;
}

export interface QueryHome_newGames {
  __typename: "GameEntityResponseCollection";
  data: QueryHome_newGames_data[];
}

export interface QueryHome {
  banners: QueryHome_banners | null;
  newGames: QueryHome_newGames | null;
}

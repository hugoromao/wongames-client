/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GameFragment_cover_data {
  __typename: "UploadFileEntity";
  attributes: GameFragment_cover_data_attributes | null;
}

export interface GameFragment_cover {
  __typename: "UploadFileEntityResponse";
  data: GameFragment_cover_data | null;
}

export interface GameFragment_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GameFragment_developers_data {
  __typename: "DeveloperEntity";
  attributes: GameFragment_developers_data_attributes | null;
}

export interface GameFragment_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GameFragment_developers_data[];
}

export interface GameFragment {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GameFragment_cover | null;
  developers: GameFragment_developers | null;
  price: number;
}

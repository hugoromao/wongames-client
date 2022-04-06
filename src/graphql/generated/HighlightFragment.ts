/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighlightFragment
// ====================================================

export interface HighlightFragment_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_background_data {
  __typename: "UploadFileEntity";
  attributes: HighlightFragment_background_data_attributes | null;
}

export interface HighlightFragment_background {
  __typename: "UploadFileEntityResponse";
  data: HighlightFragment_background_data | null;
}

export interface HighlightFragment_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: HighlightFragment_floatImage_data_attributes | null;
}

export interface HighlightFragment_floatImage {
  __typename: "UploadFileEntityResponse";
  data: HighlightFragment_floatImage_data | null;
}

export interface HighlightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlightFragment_background;
  floatImage: HighlightFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

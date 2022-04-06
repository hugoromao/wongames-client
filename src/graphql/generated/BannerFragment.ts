/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_image_data {
  __typename: "UploadFileEntity";
  attributes: BannerFragment_image_data_attributes | null;
}

export interface BannerFragment_image {
  __typename: "UploadFileEntityResponse";
  data: BannerFragment_image_data | null;
}

export interface BannerFragment_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface BannerFragment {
  __typename: "Banner";
  image: BannerFragment_image;
  title: string;
  subtitle: string;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}

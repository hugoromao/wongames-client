/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = "left",
  right = "right",
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export enum ENUM_GAME_RATING {
  BR0 = "BR0",
  BR10 = "BR10",
  BR12 = "BR12",
  BR14 = "BR14",
  BR16 = "BR16",
  BR18 = "BR18",
}

export interface CategoryFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  games?: GameFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (CategoryFiltersInput | null)[] | null;
  or?: (CategoryFiltersInput | null)[] | null;
  not?: CategoryFiltersInput | null;
}

export interface DateFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateFilterInput | null;
  eq?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface DeveloperFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  games?: GameFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (DeveloperFiltersInput | null)[] | null;
  or?: (DeveloperFiltersInput | null)[] | null;
  not?: DeveloperFiltersInput | null;
}

export interface FloatFilterInput {
  and?: (number | null)[] | null;
  or?: (number | null)[] | null;
  not?: FloatFilterInput | null;
  eq?: number | null;
  ne?: number | null;
  startsWith?: number | null;
  endsWith?: number | null;
  contains?: number | null;
  notContains?: number | null;
  containsi?: number | null;
  notContainsi?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (number | null)[] | null;
  notIn?: (number | null)[] | null;
  between?: (number | null)[] | null;
}

export interface GameFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  short_description?: StringFilterInput | null;
  description?: StringFilterInput | null;
  price?: FloatFilterInput | null;
  release_date?: DateFilterInput | null;
  rating?: StringFilterInput | null;
  categories?: CategoryFiltersInput | null;
  developers?: DeveloperFiltersInput | null;
  platforms?: PlatformFiltersInput | null;
  publisher?: PublisherFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (GameFiltersInput | null)[] | null;
  or?: (GameFiltersInput | null)[] | null;
  not?: GameFiltersInput | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface PlatformFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  games?: GameFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (PlatformFiltersInput | null)[] | null;
  or?: (PlatformFiltersInput | null)[] | null;
  not?: PlatformFiltersInput | null;
}

export interface PublisherFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  games?: GameFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (PublisherFiltersInput | null)[] | null;
  or?: (PublisherFiltersInput | null)[] | null;
  not?: PublisherFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

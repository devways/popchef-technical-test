/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Recipe>>;
};

export type QueryRecipeArgs = {
  id: Scalars['ID'];
};

export type Recipe = {
  __typename?: 'Recipe';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type GetRecipeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetRecipeQuery = {
  __typename?: 'Query';
  recipe?: {
    __typename?: 'Recipe';
    id: string;
    title?: string | null;
    content?: string | null;
  } | null;
};

export type GetRecipesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRecipesQuery = {
  __typename?: 'Query';
  recipes?: Array<{
    __typename?: 'Recipe';
    id: string;
    title?: string | null;
    content?: string | null;
  }> | null;
};

export const GetRecipeDocument = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      content
    }
  }
`;
export const GetRecipesDocument = gql`
  query GetRecipes {
    recipes {
      id
      title
      content
    }
  }
`;

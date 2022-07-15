import { gql } from '@apollo/client';

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      content
    }
  }
`;

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      content
    }
  }
`;

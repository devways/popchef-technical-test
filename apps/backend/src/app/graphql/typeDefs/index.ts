import { gql } from 'apollo-server';
import { IngredientTypeDefs } from './ingredient.type';

import { RecipeTypeDefs } from './recipe.type';
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    recipe(id: ID!): Recipe
    recipes: [Recipe!]

    ingredients: [Ingredient!]
  }

  type Mutation {
    createRecipe(title: String, content: String, ingredients: [ID!]): Recipe
    updateRecipe(
      id: ID
      title: String
      content: String
      ingredients: [ID!]
    ): Recipe
    deleteRecipe(id: ID!): Recipe

    createIngredient(name: String): Ingredient
    deleteIngredient(id: ID!): Ingredient
  }
`;

const typeDefinitions = [typeDefs, IngredientTypeDefs, RecipeTypeDefs];

export default typeDefinitions;

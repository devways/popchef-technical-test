import { gql } from 'apollo-server';

export const IngredientTypeDefs = gql`
  type Ingredient {
    id: ID!
    name: String
  }
`;

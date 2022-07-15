import { QueryResolvers } from '../generated/graphql';

// Resolvers define the technique for fetching the types in the schema.
export const IngredientResolver: {
  Query: Pick<QueryResolvers, 'ingredients'>;
  Mutation: Pick<QueryResolvers, 'createIngredient' | 'deleteIngredient'>;
} = {
  Query: {
    ingredients: (_, __, ctx) => ctx.dataSources.ingredients.getIngredients(),
  },
  Mutation: {
    createIngredient: (_, args, ctx) =>
      ctx.dataSources.ingredients.createIngredient(args),
    deleteIngredient: (_, args, ctx) =>
      ctx.dataSources.ingredients.deleteIngredient(args),
  },
};

import { QueryResolvers } from '../generated/graphql';

// Resolvers define the technique for fetching the types in the schema.
export const RecipeResolver: {
  Query: Pick<QueryResolvers, 'recipe' | 'recipes'>;
  Mutation: Pick<
    QueryResolvers,
    'createRecipe' | 'updateRecipe' | 'deleteRecipe'
  >;
} = {
  Query: {
    recipe: (_, args, ctx) => ctx.dataSources.recipes.getRecipe(args),
    recipes: (_, __, ctx) => ctx.dataSources.recipes.getRecipes(),
  },
  Mutation: {
    createRecipe: (_, args, ctx) => ctx.dataSources.recipes.createRecipe(args),
    updateRecipe: (_, args, ctx) => ctx.dataSources.recipes.updateRecipe(args),
    deleteRecipe: (_, args, ctx) => ctx.dataSources.recipes.deleteRecipe(args),
  },
};

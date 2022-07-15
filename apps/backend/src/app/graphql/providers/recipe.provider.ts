import { DataSource } from 'apollo-datasource';
import { QueryRecipeArgs } from '../generated/graphql';

import { Recipe } from '../../entities/recipe.entity';
/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class RecipesProvider extends DataSource {
  public async getRecipe({ id }: QueryRecipeArgs) {
    return Recipe.findOne({ where: { id } });
  }

  public async getRecipes() {
    return Recipe.find();
  }
}

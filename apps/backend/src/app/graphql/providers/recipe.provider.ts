import { DataSource } from 'apollo-datasource';
import { QueryRecipeArgs } from '../generated/graphql';

import { Recipe } from '../../entities/recipe.entity';
import { Ingredient } from '../../entities/ingredient.entity';
/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class RecipesProvider extends DataSource {
  public async getRecipe({ id }: QueryRecipeArgs) {
    return Recipe.findOne({ where: { id }, relations: ['ingredients'] });
  }

  public async getRecipes() {
    return Recipe.find();
  }

  public async createRecipe({ title, content, ingredients }: any) {
    const recipe = new Recipe();
    recipe.title = title;
    recipe.content = content;

    recipe.ingredients = await Ingredient.findByIds(ingredients);

    return recipe.save();
  }

  public async updateRecipe({ id, title, content, ingredients }: any) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    recipe.title = title;
    recipe.content = content;

    recipe.ingredients = await Ingredient.findByIds(ingredients);

    return recipe.save();
  }

  public async deleteRecipe({ id }: any) {
    const recipe = await Recipe.findOne({ where: { id } });
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe.remove();
  }

  // public async createIngredient({ name }: any) {
  //   const ingredient = new Ingredient();
  //   ingredient.name = name;
  //   return ingredient.save();
  // }

  // public async deleteIngredient({ id }: any) {
  //   const ingredient = await Ingredient.findOne({ where: { id } });
  //   if (!ingredient) {
  //     throw new Error('Ingredient not found');
  //   }
  //   return ingredient.remove();
  // }
}

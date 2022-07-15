import { DataSource } from 'apollo-datasource';
import { Ingredient } from '../../entities/ingredient.entity';
/**
 * This is a data source exemple which can be used with typeorm to access data.
 * This dataSource is injected into the context of the apollo server,
 * which makes it usable inside the resolvers.
 */
export class IngredientsProvider extends DataSource {
  public async getIngredients() {
    return Ingredient.find();
  }

  public async createIngredient({ name }: any) {
    const ingredient = new Ingredient();
    ingredient.name = name;
    return ingredient.save();
  }

  public async deleteIngredient({ id }: any) {
    const ingredient = await Ingredient.findOne({ where: { id } });
    if (!ingredient) {
      throw new Error('Ingredient not found');
    }
    return ingredient.remove();
  }
}

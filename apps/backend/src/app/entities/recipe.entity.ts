import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Ingredient } from './ingredient.entity';

@Entity('recipes')
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  @JoinTable()
  ingredients: Ingredient[];
}

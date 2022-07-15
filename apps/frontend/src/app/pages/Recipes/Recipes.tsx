import { FC } from 'react';
import { useQuery } from '@apollo/client';

import type {
  GetRecipesQuery,
  GetRecipesQueryVariables,
} from 'app/generated/graphql';
import { GET_RECIPES } from 'app/shared/graphql/queries/recipe.query';
import UISpinner from 'app/components/UI/UISpinner';

import './Recipes.scss';
const Recipes: FC = () => {
  // This an example of how to execute query GraphQL API
  const { data, loading, error } = useQuery<
    GetRecipesQuery,
    GetRecipesQueryVariables
  >(GET_RECIPES, {
    fetchPolicy: 'no-cache',
  });

  return (
    <div id="Recipes">
      <br />
      {loading && <UISpinner />}
      {!loading && data?.recipes && (
        <div className="recipes">
          {data.recipes.map((recipe) => (
            <div key={recipe.id}>
              <div className="recipe__title">{recipe.title}</div>
              <div className="recipe__content">{recipe.content}</div>
            </div>
          ))}
        </div>
      )}
      {!loading && Boolean(error) && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">
            Something went wrong... Unable to get our amazing recipes :(
          </span>
        </div>
      )}
    </div>
  );
};

export default Recipes;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes, fetchSomeIngredients } from 'components/Recipe/FetchRecipe';
import { RecipePageHero } from 'components/Hero/RecipeHero/RecipePageHero';
import { IngredientsList } from 'components/Recipe/IngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/Recipe/RecipePreparation';
import { NoResults } from 'components/NoResults';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredientsOne, setIngredientsOne] = useState([]);
  const [arrayAllId, setArrayAllId] = useState([]);
  const [ingredients, setIngredients] = useState([]);
 

  // get recipe
  useEffect(() => {
    async function getRecipe() {
      try {
        const recipe = await fetchRecipes(recipeId);
        if (recipe.length === 0) {

          return;
        }

        setRecipe(recipe);

        setIngredientsOne(recipe.ingredients);

        const arrayId = recipe.ingredients.map(item => item.id);

        setArrayAllId(arrayId);
      } catch (error) {
       
        console.log(error);
      }
    }
    getRecipe();
  }, [recipeId]);

  // get ingredients
  useEffect(() => {
    async function getIngredients() {
      const query = { arrayId: arrayAllId };

      try {
        const someIngredients = await fetchSomeIngredients(query);

        if (someIngredients.length === 0) {
          return;
        }

        // merge two array objects
        const totalInfoForRecipe = someIngredients.map(ingredient => {
          const haveEqualId = item => item.id === ingredient._id;
          const userWithEqualId = ingredientsOne.find(haveEqualId);
          return Object.assign({}, ingredient, userWithEqualId);
        });

        setIngredients(totalInfoForRecipe);
      } catch (error) {
        console.log(error);
      }
    }
    getIngredients();
  }, [arrayAllId, ingredientsOne]);

  const { _id, title, description, time, thumb, instructions, favorite } =
    recipe;

  return (
    <>
      {ingredients.length > 0 ? (
        <>
          <RecipePageHero
            title={title}
            description={description}
            _id={_id}
            time={time}
            favorite={favorite}
          />
      
          <IngredientsList ingredients={ingredients} />
          <RecipePreparation instructions={instructions} thumb={thumb} />
        </>
			 
      ) : (
        <NoResults text="No recipes found" />
      )}
    </>
  );
};


export default RecipePage;

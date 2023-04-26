import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from 'components/Recipe/FetchRecipe';
import { RecipePageHero } from 'components/Hero/RecipeHero/RecipePageHero';
import { IngredientsList } from 'components/Recipe/IngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/Recipe/RecipePreparation';
const zipWith = require('lodash.zipwith');

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredientsOne, setIngredientsOne] = useState([]);
  const [arrayAllId, setArrayAllId] = useState([]);
  const [ingredientsTwo, setIngredientsTwo] = useState([]);
  const [bingo, setBingo] = useState([])

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

		// rename key object
		// const renamedArr = someIngredients.map(function(obj) {
		// 	obj['_id'] = obj['id']; // Assign new key
		// 	delete obj['id']; // Delete old key
		// 	return obj;
		// });

		const renamedArr = ingredientsOne.map((obj) => {
			obj._id = obj.id; // Assign new key
			delete obj.id; // Delete old key
			return obj;
		});
		

		// merge array with object ingredients
		const merge = (obj1, obj2) => ({...obj1, ...obj2});
		const newArrIngredients = zipWith(someIngredients, renamedArr, merge)




        setIngredientsTwo(someIngredients);
		setBingo(newArrIngredients)
      } catch (error) {
        console.log(error);
      }
    }
    getIngredients();
  }, [arrayAllId, ingredientsOne]);

  const { _id, title, description, time, thumb, instructions, favorites } =
    recipe;
  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        _id={_id}
        time={time}
        favorites={favorites}
      />
      <IngredientsList

        // ingredientsOne={ingredientsOne}
        ingredientsTwo={ingredientsTwo}
		bingo={bingo}
      />
      <RecipePreparation instructions={instructions} thumb={thumb} />
    </>
  );
};

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchSomeIngredients = async data => {
  const responce = await axios.post(`ingredients`, data);
  return responce.data.data.ingretients;
};

export default RecipePage;

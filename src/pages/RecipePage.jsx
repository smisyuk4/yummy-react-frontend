import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from 'components/Recipe/FetchRecipe';
import { RecipePageHero } from 'components/Hero/RecipeHero/RecipePageHero';
import { IngredientsList } from 'components/Recipe/IngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/Recipe/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredientsOne, setIngredientsOne] = useState([]);
  const [arrayAllId, setArrayAllId] = useState([]);
  const [ingredientsTwo, setIngredientsTwo] = useState([]);

  // get recipe
  useEffect(() => {
    async function getRecipe() {
      try {
        const recipe = await fetchRecipes(recipeId);

        //   console.log('test', getrecipe);
        // if (!getrecipe) {
        //   return;
        // }
        setRecipe(recipe);

        setIngredientsOne(recipe.ingredients);

        const arrayId = recipe.ingredients.map(item => item.id);

        setArrayAllId(arrayId);

        // const query = {
        // 	"arrayId": [ "640c2dd963a319ea671e3756"]
        // }

        // const someIngredients = await fetchSomeIngredients(query);

        // console.log('someIngredients Arr', someIngredients);
        // setIngredientsTwo(someIngredients)

        //   console.log(getrecipe.ingredients)
        //   console.log("arrayId:", ingredientsTwo)
      } catch (error) {
        console.log(error);
      }
    }
    getRecipe();
  }, [recipeId]);

  // get ingredients
  useEffect(() => {
    async function getIngredients() {
      const query = {"arrayId": arrayAllId}
    //   const query = {
    //     arrayId: [
    //       '640c2dd963a319ea671e3796',
    //       '640c2dd963a319ea671e370c',
    //       '640c2dd963a319ea671e3756',
    //     ],
    //   };
      // console.log(query);
      try {
        const someIngredients = await fetchSomeIngredients(query);
        console.log('someIngredients Arr', someIngredients);
        setIngredientsTwo(someIngredients);
      } catch (error) {
        console.log(error);
      }
    }
    getIngredients();
  }, [arrayAllId]);

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
      <IngredientsList ingredients={ingredientsOne} />
      <RecipePreparation instructions={instructions} thumb={thumb} />
    </>
  );
};

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchSomeIngredients = async data => {
  const responce = await axios.post(`ingredients`, data);
  console.log('responce: ', responce);
  return responce.data.data.ingretients;
};

export default RecipePage;

// axios({
// 	method: 'post',
// 	url: '/user/12345',
// 	data: {
// 	  firstName: 'Fred',
// 	  lastName: 'Flintstone'
// 	}
//   });

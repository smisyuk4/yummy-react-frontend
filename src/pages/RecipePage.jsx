import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchRecipes } from 'components/Recipe/FetchRecipe';
import { RecipePageHero } from "components/Hero/RecipeHero/RecipePageHero";
import { IngredientsList } from 'components/Recipe/IngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/Recipe/RecipePreparation';


const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    
	useEffect(() => {
		async function getRecipe() {
      try {
		  const getrecipe = await fetchRecipes(recipeId);
		  console.log('test', getrecipe);
        if (!getrecipe) {
          return;
        }
        setRecipe(getrecipe);
		  setIngredients(getrecipe.ingredients);
		  console.log(getrecipe.ingredients)
      } catch (error) {
		  console.log(error);
      }
    }
    getRecipe();
	}, [recipeId]);
	const { _id, title, description, time, thumb, instructions, favorites} = recipe;
	return (<>
		<RecipePageHero
		title={title}
		description={description}
		_id={_id}
		time={time}
		favorites={favorites}/>
		<IngredientsList ingredients={ingredients} />
		<RecipePreparation
			instructions={instructions}
			thumb = {thumb}/>
		</>);
};

export default RecipePage
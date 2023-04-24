import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchRecipes } from 'components/Recipe/FetchRecipe';
import { RecipePageHero } from "components/Hero/RecipeHero/RecipePageHero";
import { IngredientsList } from 'components/Recipe/IngredientsList/RecipeIngredientsList';


const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState([]);

    
	useEffect(() => {
		async function getRecipe() {
      try {
		 const getrecipe = await fetchRecipes(recipeId);
		 console.log(getrecipe);
        if (!getrecipe) {
          return;
        }
        setRecipe(getrecipe);
        
      } catch (error) {
		  console.log(error);
      }
    }
    getRecipe();
	}, [recipeId]);
	const { _id, title, description, time} = recipe;
	console.log('test', recipe)
	return (<>
		<RecipePageHero
		title={title}
		description={description}
		id={_id}
		time= {time}/>
		<IngredientsList/>
		
		</>);
};

export default RecipePage
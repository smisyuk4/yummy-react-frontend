// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { RecipePageHero } from "components/Hero/RecipeHero/RecipePageHero";
import axios from 'axios';



// axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchRecipes = async (id) => {
	const  result  = await axios.get(`recipes/${id = '640cd5ac2d9fecf12e8897f5'}`);
	return result.data.result;
};


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
		time= {time}>
			
		</RecipePageHero>
		
		</>);
};

export default RecipePage
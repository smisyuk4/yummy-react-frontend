// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import { selectError, selectIsLoading , selectRecipes} from '../redux/recipes/recipesSelector';
// import { fetchRecipes } from 'redux/recipes/recipesThunk';
import { RecipePageHero } from "components/Hero/RecipeHero/RecipePageHero";
import axios from 'axios';

//! FETCH RECIPES TO MAIN PAGE
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};


export const fetchRecipes = async (id) => {
	const { result } = await axios.get(`recipes/${id = '640cd5ac2d9fecf12e8897f5'}?auth=${TOKEN}`, config);
	return result;
};


export const RecipePage = () => {
	// const isLoading = useSelector(selectIsLoading);
	// const error = useSelector(selectError);
	// const currentRecipe = useSelector(selectRecipes);
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState([]);
	// const dispatch = useDispatch();
	// useEffect(() => {
    //     dispatch(fetchRecipes());
    // }, [dispatch]);
	useEffect(() => {
    async function getRecipe() {
      try {
        const { recipe } = await fetchRecipes(recipeId);
        if (!recipe) {
          return;
        }
        setRecipe(recipe);
        
      } catch (error) {
		  console.log(error);
      }
    }
    getRecipe();
	}, [recipeId]);
	const {
    _id,
    title,
    description,
  } = recipe;
	return (<>
		<RecipePageHero>
			title={title},
			description={description}
			id={_id}
		</RecipePageHero>
		
		</>);
};

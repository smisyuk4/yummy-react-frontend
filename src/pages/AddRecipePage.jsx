import { AddRecipeForm } from 'components/AddRecipePage/AddRecipeForm';
// import { RecipeDescription } from 'components/AddRecipePage/RecipeDescription';

import axios from 'axios';
import { useEffect, useState } from 'react';

//! FETCH RECIPES TO MAIN PAGE
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

const fetchRecipes = async () => {
	const responce = await axios.get(
		`recipes/popular-recipes?auth=${TOKEN}`,
		config
	);
	return responce;
};

const AddRecipePage = () => {
	const [popRecipes, setPopRecipes] = useState([]);
	useEffect(() => {
		fetchRecipes()
			.then(({ data }) => setPopRecipes(data))
			.catch(error => error);
	}, []);
	console.log('popular-recipes', popRecipes.data.recipesByPopular);
	return (
		<div>
			{/* <RecipeDescription /> */}
			<AddRecipeForm />
		</div>
	);
};

export default AddRecipePage
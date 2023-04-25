import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchPopularRecipes = async () => {
	const responce = await axios.get(`recipes/popular-recipes`);
	return responce.data.data.recipesByPopular;
};

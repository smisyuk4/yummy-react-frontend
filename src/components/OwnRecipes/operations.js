import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchOwnRecipes = async () => {
	const response = await axios.get('ownRecipes');
	return response;
};

export const deleteOwnRecipe = async id => {
	await axios.delete(`ownRecipes/${id}`);
	return;
};

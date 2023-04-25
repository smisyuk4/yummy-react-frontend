import axios from 'axios';

export const fetchByTitle = async searchValue => {
	const responce = await axios.get(
		`/recipes/search?title=${searchValue}&page=1&limit=10`
	);
	return responce;
};

export const fetchByIngredients = async categ => {
	const responce = await axios.get(`/recipes/category/${categ}`);
	return responce;
};

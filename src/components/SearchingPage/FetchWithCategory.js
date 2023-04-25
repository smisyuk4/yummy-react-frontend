import axios from 'axios';

export const fetchByTitle = async (value, { page, limit }) => {
	console.log(value, page, limit);
	const responce = await axios.get(
		`/recipes/search?title=${value}&page=${page}&limit=${limit}`
	);
	return responce;
};

export const fetchByIngredients = async categ => {
	const responce = await axios.get(`/recipes/category/${categ}`);
	return responce;
};

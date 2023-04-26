import axios from 'axios';

export const fetchByTitle = async (value, { page, limit }) => {
	const responce = await axios.get(
		`/recipes/search?title=${value}&page=${page}&limit=${limit}`
	);
	return responce;
};

export const fetchByIngredients = async (value, { page, limit }) => {
	const responce = await axios.get(
		`/recipes/ingredients?ttl=${value}&page=${page}&limit=${limit}`
	);
	return responce;
};

export const fetchByGlobalIngredients = async value => {
	// console.log(value, page, limit);
	const responce = await axios.get(`/ingredients/global?ingredient=${value}`);
	return responce;
};

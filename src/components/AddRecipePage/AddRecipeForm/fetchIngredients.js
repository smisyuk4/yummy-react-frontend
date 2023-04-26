import axios from "axios";
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

export const getAllIngredients = async () => {
	const responce = await axios.get(`ingredients/list?auth=${TOKEN}`, config);
	return responce;
};
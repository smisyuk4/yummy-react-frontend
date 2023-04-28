import axios from "axios";
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';


export const getAllIngredients = async () => {
	const responce = await axios.get(`ingredients/list`);
	return responce;
};
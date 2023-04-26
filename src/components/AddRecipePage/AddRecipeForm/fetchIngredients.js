import axios from "axios";
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2U0YmQwODAxNDczN2U5NzEyMjcxZCIsImlhdCI6MTY4MTgwNDI0MCwiZXhwIjoxNjg0Mzk2MjQwfQ.tCwCnXn4ejn0ckogt37B73nPsQT8CbAjkSlSAJun9Jw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

export const getAllIngredients = async () => {
	const responce = await axios.get(`ingredients/list?auth=${TOKEN}`, config);
	return responce;
};
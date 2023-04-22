import axios from "axios";
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

export const getAllIngredients = async () => {
	const responce = await axios.get(`ingredients/list?auth=${TOKEN}`, config);
	return responce;
};
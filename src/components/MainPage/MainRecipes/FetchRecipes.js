import axios from 'axios';

//! FETCH RECIPES TO MAIN PAGE
axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

export const fetchRecipes = async () => {
	const responce = await axios.get(`recipes/main-page?auth=${TOKEN}`, config);
	return responce;
};

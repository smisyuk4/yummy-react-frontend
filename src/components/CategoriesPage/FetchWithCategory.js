import axios from 'axios';

// axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';
// const TOKEN =
// 	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

// const config = {
// 	headers: {
// 		auth: `${TOKEN}`,
// 	},
// };

export const fetchAllCategory = async () => {
	const responce = await axios.get(`/recipes/category-list`);
	return responce;
};

export const fetchOneCategory = async categ => {
	const responce = await axios.get(`/recipes/category/${categ}`);
	return responce;
};

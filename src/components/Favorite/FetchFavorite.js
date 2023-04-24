import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchFavorite = async () => {
	const responce = await axios.get(`recipes/favorite`);
    console.log(responce)
	return responce;
};

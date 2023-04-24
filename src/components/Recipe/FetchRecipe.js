import axios from "axios";

export const fetchRecipes = async (id) => {
	const  result  = await axios.get(`recipes/${id }`);
	return result.data.result;
};
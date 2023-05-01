import axios from 'axios';

export const fetchRecipes = async id => {
  const result = await axios.get(`recipes/${id}`);
  return result.data.result;
};

export const fetchSomeIngredients = async data => {
  const responce = await axios.post(`ingredients/list`, data);
  return responce.data.data.ingretients;
};

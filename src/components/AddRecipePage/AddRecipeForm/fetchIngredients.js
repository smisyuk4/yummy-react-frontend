import axios from 'axios';

export const getAllIngredients = async () => {
  const responce = await axios.get(`ingredients/list`);
  return responce;
};

import axios from 'axios';

export const fetchRecipes = async () => {
  const responce = await axios.get(`recipes/main-page`);
  return responce;
};

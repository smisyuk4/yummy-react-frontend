import axios from 'axios';

export const fetchPopularRecipes = async () => {
  const responce = await axios.get(`recipes/popular-recipes`);
  return responce.data.data.recipesByPopular;
};

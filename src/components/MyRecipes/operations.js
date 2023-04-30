import axios from 'axios';

export const fetchOwnRecipes = async () => {
  const response = await axios.get('ownRecipes');
  return response;
};

export const deleteOwnRecipe = async id => {
  await axios.delete(`ownRecipes/${id}`);
  return;
};

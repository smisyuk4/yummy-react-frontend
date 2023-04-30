import axios from 'axios';

export const fetchAllCategory = async () => {
  const responce = await axios.get(`/recipes/category-list`);
  return responce;
};

export const fetchOneCategory = async categ => {
  const responce = await axios.get(`/recipes/category/${categ}`);
  return responce;
};

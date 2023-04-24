import axios from 'axios';

export const addIngredient = async ingredient => {
    const response = await axios.post('/ingredients/shopping-list', ingredient); 
    return response;
};

export const getShoppingList = async () => {
    const response = await axios.get('/ingredients/shopping-list'); 
    return response;
};

export const deletIngredientInShoppingList = async id => {
    const response = await axios.delete(`/ingredients/shopping-list/${id}`); 
    return response;
}
import { useState, useEffect } from 'react';

import { addIngredient, deleteIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';
import {InputCheck} from './RecipeIngredients.styled'

export const Checkbox = ({ ingredient, currentShopList, recipeId }) => {
  const [checked, setChecked] = useState(false);
  const [shoppingId, setShoppingId] = useState();

  const { id, ttl, thb, measure } = ingredient;

  useEffect(() => {


    if (currentShopList.length > 0 ) {
      const inShoppingList = currentShopList.find(item => item.ingredientId === id && item.recipeId === recipeId);
      setChecked(inShoppingList ? true : false);
      setShoppingId(inShoppingList);
    }
  }, [currentShopList, id, recipeId]);

  const checkboxChange = (event) => {
    if (checked) {
      console.log('id', id);
      deleteIngredientInShoppingList(shoppingId._id).then(() => setChecked(false));
    } else {
      addIngredient({ingredientId: id, ttl, thb, measure, recipeId }).then(() => setChecked(true));
    }
  };

  return (
    <InputCheck
      id={id}
      type="checkbox"
      checked={checked}
      onChange={event => checkboxChange(event, { ttl, thb, measure })}
    >
    </InputCheck>
  );
};
import { useState, useEffect } from 'react';

import { addIngredient, deleteIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';
import {InputCheck} from './RecipeIngredients.styled'

export const Checkbox = ({ ingredient, currentShopList }) => {
  const [checked, setChecked] = useState(false);
  const [shoppingId, setShoppingId] = useState();

  const { id, ttl, thb, measure } = ingredient;
 
  useEffect(() => {
    if (currentShopList.length > 0) {
      const inShoppingList = currentShopList.find(item => item.ingredientId === id);
      setChecked(inShoppingList ? true : false);
      setShoppingId(inShoppingList);
    }
  }, [currentShopList, id]);

  const checkboxChange = (event) => {
    if (checked) {
      deleteIngredientInShoppingList(shoppingId._id).then(() => setChecked(false));
    } else {
      addIngredient({ingredientId: id, ttl, thb, measure }).then(() => setChecked(true));
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
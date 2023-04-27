import { useState, useEffect } from 'react';

import { addIngredient, deleteIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';

export const Checkbox = ({ ingredient, currentShopList }) => {
  const [checked, setChecked] = useState(false);

  const { id, ttl, thb, measure } = ingredient;
  console.log(ingredient);

  useEffect(() => {
    if (currentShopList.length > 0) {
      const inShoppingList = currentShopList.find(item => item.ingredientId === id);
      setChecked(inShoppingList ? true : false);
    }
  }, [currentShopList, id]);

  const checkboxChange = (event) => {
    if (checked) {
      deleteIngredientInShoppingList(checked).then(() => setChecked(false));
    } else {
      addIngredient({ingredientId: id, ttl, thb, measure }).then(() => setChecked(true));
    }
  };

  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={event => checkboxChange(event, { ttl, thb, measure })}
    ></input>
  );
};
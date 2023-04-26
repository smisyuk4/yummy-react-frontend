import { useState, useEffect } from 'react';

import { addIngredient, deleteIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';

export const MyCheckbox = ({ ingredient, currentShopList }) => {
  const [checked, setChecked] = useState(false);

  const { id, ttl, thb, measure } = ingredient;
  console.log(ingredient);

  useEffect(() => {
    if (currentShopList.length > 0) {
      const isInList = currentShopList.find(item => item.ttl === ttl);
      setChecked(isInList ? isInList.id : false);
    }
  }, [currentShopList, ttl]);

  const handleCheckboxChange = (event) => {
    if (checked) {
      deleteIngredientInShoppingList(checked).then(() => setChecked(false));
    } else {
      addIngredient().then(() => setChecked(true));
    }
  };

  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={event => handleCheckboxChange(event, { ttl, thb, measure })}
    ></input>
  );
};
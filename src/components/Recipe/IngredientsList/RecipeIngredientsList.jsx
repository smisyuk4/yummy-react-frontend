import * as React from 'react';
import { useState, useEffect } from 'react';
import { getShoppingList, addIngredient, deleteIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';
import ingredImage from 'images/recipeImg/ingredient.jpg';
import {
  IngredientsListSection,
  ListStyled,
  IngedientsItem,
  IngredientName,
  Wrapper,
  IngMeasure,
  MeasureWrapper,
  ListBar,
  ItemBar,
  InputCheck
} from './RecipeIngredients.styled';

export const IngredientsList = ({ ingredients, recipeId }) => {
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    getShoppingList()
      .then(data => {
        setShoppingList(data.data.shoppingList);
      })

      .catch(error => console.error(error));
  }, []);

  const addToShopingList = (ingridient) => {
    const { thb, _id: ingredientId, measure, ttl } = ingridient;

    const newShoppingListItem = {
      ingredientId,
      ttl,
      thb,
      measure,
      recipeId,
    };

    addIngredient(newShoppingListItem)
      .then((response) => {
        setShoppingList(response.data.updatedShoppingList);
      })
      .catch(error => console.error(error));
  };

  const removeFromShopingList = (shoppingListItem) => {
    deleteIngredientInShoppingList(shoppingListItem._id)
      .then(response => {
        setShoppingList(response.newUser.shoppingList);
      })
      .catch(error => console.error(error));
  };

  return (
    <IngredientsListSection>
      
      <ListBar>
        <ItemBar>Ingredients</ItemBar>
        <ItemBar>Number</ItemBar>
        <ItemBar>Add to list</ItemBar>
      </ListBar>
    
      <>
        <ListStyled>
          {ingredients.length > 0 &&
            ingredients.map((ingridient) => {
              const { thb, _id, measure, ttl } = ingridient;
              const shoppingListItem = shoppingList.find(item => item.ingredientId === ingridient.id && item.recipeId === recipeId);
              const isIngridientInShoppingList = shoppingListItem != null;

              return (
                <IngedientsItem key={_id}>
                  <Wrapper>
                    {thb ? (
                      <img src={thb} alt={ttl} />
                    ) : (
                      <img src={`${ingredImage}`} alt={ttl} />
                    )}

                    <IngredientName>{ttl}</IngredientName>
                  </Wrapper>

                  <Wrapper>
                    <MeasureWrapper>
                      <IngMeasure>{measure}</IngMeasure>
                    </MeasureWrapper>
                    <label>
                      <InputCheck
                        id={_id}
                        type="checkbox"
                        checked={isIngridientInShoppingList}
                        onChange={() =>isIngridientInShoppingList ? removeFromShopingList(shoppingListItem) : addToShopingList(ingridient)}
                      />
                    </label>
                  </Wrapper>
                </IngedientsItem>
              );
            })}
        </ListStyled>
      </>
    </IngredientsListSection>
  );
};

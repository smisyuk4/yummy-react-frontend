import * as React from 'react';
import { ListBar, DivContainer, ItemBar } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingListstyled';
// import { getShoppingList } from 'components/Shopping/fetchShoppingList';
import { IngredientsListSection, ListStyled, IngedientsItem } from './RecipeIngredients.styled';

export const IngredientsList = ({ ingredients }) => {
    
    return (
        <IngredientsListSection>
            <DivContainer>
			<ListBar>
				<ItemBar>Ingredients</ItemBar>
				<ItemBar>Number</ItemBar>
				<ItemBar>Add to list</ItemBar>
			</ListBar>
            </DivContainer>
            <>
            <ListStyled>
                    {ingredients &&
            ingredients.map(({ thb, id, measure, ttl }) => {
              return (
                <IngedientsItem key={id}>
                  <div>
                    {
                      <img
                        src={thb}
                        alt="Ingredient"
                      />
                    }
                    <p>{ttl}</p>
                  </div>
                  <div>
                    <p>{measure}</p>
                    {/* <CheckBoxLabel htmlFor={_id}>
                      <IngedientsCheck
                        type="checkbox"
                        checked={!!shoppingList.find(item => item.id === _id)}
                        id={_id}
                        value={_id}
                        onChange={handleInputChange}
                      />
                      <CheckBoxWrap>
                        <CheckMarkIcon />
                      </CheckBoxWrap>
                    </CheckBoxLabel> */}
                  </div>
                </IngedientsItem>
              );
            })}
        
                </ListStyled>
                </>
        </IngredientsListSection>
    
)
};


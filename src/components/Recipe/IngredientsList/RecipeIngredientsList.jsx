import * as React from 'react';

import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { ListBar, DivContainer, ItemBar } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingList.styled';
import { getShoppingList } from 'components/Shopping/fetchShoppingList';
import ingredImage from 'images/recipeImg/ingredImage.jpg'
import { IngredientsListSection, ListStyled, IngedientsItem, Wrapper} from './RecipeIngredients.styled';
import { MyCheckbox } from './Checkbox';

export const IngredientsList = ({ ingredients }) => {
  // const [checked, setChecked] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
		getShoppingList()
			.then(() => setShoppingList())
			.catch(error => console.error(error));
	}, []);


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
                    {ingredients.length > 0 &&
            ingredients.map(({ thb, id, measure, ttl }) => {
              return (
                <IngedientsItem key={id}>
                  <Wrapper>
                    {
                      <img
                        src={thb ?? ingredImage}
                        alt="Ingredient"
                      />
                    }
                    <p>{ttl}</p>
                  </Wrapper>
                  <div>
                    <p>{measure}</p>
                    <label >
                      <MyCheckbox
                        type="checkbox"
                        ingredient={{ id, ttl, thb, measure }}
      
                        currentShopList={shoppingList}
                      
                        // onChange={event => handleCheckboxChange(event, { ttl, thb, measure, id })}
                        // checked={!!shoppingList.find(item => item.id === id)}
                        id={id}
                        // value={id}
                        // onChange={handleInputChange}
                      />
                      
                    </label>
                  </div>
                </IngedientsItem>
              );
            })}
        
                </ListStyled>
                </>
        </IngredientsListSection>
    
)
};

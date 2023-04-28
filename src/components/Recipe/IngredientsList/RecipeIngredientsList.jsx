import * as React from 'react';
import { useState, useEffect } from 'react';
// import { ListBar, DivContainer, ItemBar } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingList.styled';
import { getShoppingList } from 'components/Shopping/fetchShoppingList';
import ingredImage from 'images/recipeImg/ingredImage.jpg'
import { IngredientsListSection, ListStyled, IngedientsItem, IngredientName, Wrapper, IngMeasure, ListBar, ItemBar} from './RecipeIngredients.styled';
import { Checkbox } from './Checkbox';


export const IngredientsList = ({ ingredients }) => {
  const [shoppingList, setShoppingList] = useState([]);
  console.log(ingredients);
  useEffect(() => {
    
    getShoppingList()
      .then((data) => {
        setShoppingList(data.data.shoppingList)
        console.log(data.data.shoppingList)
      })
  
			.catch(error => console.error(error));
	}, []);


    return (
        <IngredientsListSection>
            {/* <DivContainer> */}
			<ListBar>
				<ItemBar>Ingredients</ItemBar>
				<ItemBar>Number</ItemBar>
				<ItemBar>Add to list</ItemBar>
			</ListBar>
            {/* </DivContainer> */}
            <>
            <ListStyled>
                    {ingredients.length > 0 &&
            ingredients.map(({ thb, _id, id, measure, ttl }) => {
              return (
                <IngedientsItem key={_id}>
                  <Wrapper>
                    {
                      <img
                        src={thb ?? ingredImage}
                        alt="Ingredient"
                      />
                    }
                     <IngredientName>{ttl}</IngredientName>
                  </Wrapper>
                
                   <Wrapper>
                  <IngMeasure>{measure}</IngMeasure>
                    <label>
                      <Checkbox
                        type="checkbox"
                        ingredient={{ id, ttl, thb, measure }}
                        currentShopList={shoppingList}
                        id={id}
                      />
                    
                    </label>
                    </Wrapper>
                </IngedientsItem>
              );
            })}
        
                </ListStyled>
                </>
        </IngredientsListSection>
    
)
};

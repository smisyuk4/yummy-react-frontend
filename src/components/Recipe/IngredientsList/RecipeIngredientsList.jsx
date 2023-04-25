import * as React from 'react';

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { ListBar, DivContainer, ItemBar } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingList.styled';
// import { getShoppingList, addIngredient, deletIngredientInShoppingList } from 'components/Shopping/fetchShoppingList';



import { IngredientsListSection, ListStyled, IngedientsItem } from './RecipeIngredients.styled';


export const IngredientsList = ({ ingredients }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [shoppingList, setShoppingList] = useState([]);
//  useEffect(() => {
// 		async function getShopping() {
//       try {
// 		  const currentlist = await getShoppingList();
		  // console.log('test', currentlist);
//         setShoppingList(currentlist);
// 		  console.log(currentlist)
//       } catch (error) {
// 		  console.log(error);
//       }
//     }
//     getShopping();
//  }, []); 
  
    // const { recipeId } = useParams();
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
                    {/* <label >
                      <input
                        type="checkbox"
                        ingredient={{ id, ttl, thb, measure }}
                        currentShopList={shoppingList} */}
                        
                        {/* // checked={!!shoppingList.find(item => item.id === _id)}
                        // id={_id}
                        // value={_id}
                        // onChange={handleInputChange}
                      /> */}
                      {/* <CheckBoxWrap>
                        <CheckMarkIcon /> */}
                      
                    {/* </label> */}
                  </div>
                </IngedientsItem>
              );
            })}
        
                </ListStyled>
                </>
        </IngredientsListSection>
    
)
};


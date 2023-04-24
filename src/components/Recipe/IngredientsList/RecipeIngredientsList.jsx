import * as React from 'react';
import { ListBar, DivContainer, ItemBar } from 'components/Shopping/IngredientsShoppingList/IngredientsShoppingListstyled';
import { IngredientsListSection, ListStyled, IngedientsItem } from './RecipeIngredients.styled';

export const IngredientsList = () => {
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
                <IngedientsItem>fff</IngedientsItem>
                </ListStyled>
                </>
        </IngredientsListSection>
    
)
};


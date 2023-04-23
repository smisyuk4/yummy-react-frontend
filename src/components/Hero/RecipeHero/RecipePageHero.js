import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { HeroSection, ButtonStyled } from './RecipePageHero.styled';
// import {  selectRecipes} from '../../../redux/recipes/recipesSelector';
// import { fetchRecipes } from '../../../redux/recipes/recipesThunk';





export const RecipePageHero = ({title, description}) => {


  return (
    <HeroSection>
      <div>
				<h1>{title}</h1>
        <p>{description}</p>
      </div>
     <ButtonStyled>Add to favorite recipe</ButtonStyled>
    </HeroSection>
  ) 
};
import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { HeroSection } from './RecipePageHero.styled';
// import {  selectRecipes} from '../../../redux/recipes/recipesSelector';
// import { fetchRecipes } from '../../../redux/recipes/recipesThunk';



export const RecipePageHero = ({title, description}) => {
// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);
//     const dispatch = useDispatch();
  // const currentRecipe = useSelector(selectRecipes);
	// const dispatch = useDispatch();

  return (
    <HeroSection>
      {/* <div> */}
				<h1>{title}</h1>
				<p>{description}</p>
			{/* </div> */}
    </HeroSection>
  ) 
};
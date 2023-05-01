import { RecipesListStyled } from './MyRecipesList.styled';

export const MyRecipesList = props => {
  return <RecipesListStyled>{props.children}</RecipesListStyled>;
};

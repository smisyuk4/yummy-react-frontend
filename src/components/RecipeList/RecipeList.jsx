import { RecipeListStyled } from './RecipeList.styled';

export const RecipeList = props => {
	return <RecipeListStyled>{props.children}</RecipeListStyled>;
};

import { RecipeDescription } from '../RecipeDescription';
import { AddButton, RecipeFormDivStyled } from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
	const addRecipe = data => {
		console.log('New Recipe', data);
	};
	return (
		<RecipeFormDivStyled>
			<RecipeDescription onSubmit={addRecipe} />
			<AddButton>Add</AddButton>
		</RecipeFormDivStyled>
	);
};

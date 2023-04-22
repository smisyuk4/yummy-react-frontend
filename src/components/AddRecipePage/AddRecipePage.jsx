import { AddRecipeForm } from './AddRecipeForm';
import { AddRecipeDivStyled } from './AddRecipePage.styled';
import { OtherInformation } from './OtherInformation';
import { AddTitle } from './Title';

export const AddRecipePage = () => {
  return <AddRecipeDivStyled>
    <AddTitle/>
    <AddRecipeForm/>
    <OtherInformation/>
  </AddRecipeDivStyled>;
};
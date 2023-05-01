import { AddRecipeForm } from 'components/AddRecipePage/AddRecipeForm';
import {
  ContentDiv,
  OtherDiv,
  RecipePageDiv,
} from 'components/AddRecipePage/AddRecipeForm/AddRecipePage.styled';
import { AddRecipePageFollowUs } from 'components/AddRecipePage/AddRecipePageFollowUs/AddRecipePageFollowUs';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';

const AddRecipePage = () => {
  return (
    <RecipePageDiv>
      <ReusableComponentTitleWithJewelry title="Add recipe" />
      <ContentDiv>
        <AddRecipeForm />
        <OtherDiv>
          <AddRecipePageFollowUs title="Follow us"></AddRecipePageFollowUs>
          <PopularRecipe title="Popular recipe" />
        </OtherDiv>
      </ContentDiv>
    </RecipePageDiv>
  );
};

export default AddRecipePage;

import { AddRecipeForm } from 'components/AddRecipePage/AddRecipeForm';
import { AddRecipePageFollowUs } from 'components/AddRecipePage/AddRecipePageFollowUs/AddRecipePageFollowUs';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe';
// // import { AddRecipeDivStyled } from './AddRecipePage.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';

const AddRecipePage = () => {
  return (
//   <AddRecipeDivStyled>
		<>
			<ReusableComponentTitleWithJewelry title="Add recipe"/>
			<AddRecipeForm/>
			<AddRecipePageFollowUs title='Follow us'></AddRecipePageFollowUs>
			<PopularRecipe title="Popular recipe"/>
		</>

//   </AddRecipeDivStyled>;
)};

export default AddRecipePage

// "Зверстати компоненти що знаходяться на сторінці AddRecipePage (мобільна, планшет та десктопна версії):
// 1. MainTitle - універсальний компонент, що відмальовує заголовок і використовується на різних сторінках застосунку
// 2. AddRecipeForm
// 3. FollowUs
// 4. PopularRecipe"

// export const AddRecipeDivStyled = styled.AddRecipeDiv`
// // 	width: 100vw;
// // 	height: 100vh;
// // 	position: absolute;
// // 	bottom: 0;
// // 	right: 0;

// // 	@media ${props => props.theme.media.tablet} {
// // 	}
// // 	@media ${props => props.theme.media.desktop} {
// // 	}
// // `;
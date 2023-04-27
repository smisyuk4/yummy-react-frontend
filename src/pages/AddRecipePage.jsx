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

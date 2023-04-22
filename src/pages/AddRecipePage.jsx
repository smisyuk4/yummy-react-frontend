import { Title } from '../components/Title';
import { AddRecipeForm } from 'components/AddRecipePage/AddRecipeForm';
import { FollowUs } from 'components/FollowUs';
import { PopularRecipe } from 'components/AddRecipePage/PopularRecipe';
// // import { AddRecipeDivStyled } from './AddRecipePage.styled';

const AddRecipePage = () => {
  return (
//   <AddRecipeDivStyled>
		<>
			<Title title="Add recipe"/>
			<AddRecipeForm/>
			<FollowUs title="Follow us"/>
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
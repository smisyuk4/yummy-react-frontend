import {
	DeleteIconStyled,
	RecipeItem,
	RecipeImgWrapper,
	RecipeImg,
	RecipeWrapper,
	RecipeTitle,
	DeleteButton,
	RecipeAbout,
	RecipeTime,
	SeeRecipeBtn,
} from './RecipeListItem.styled';

import defaultImage from '../../images/recipeImg/default-img.png';

export const RecipeListItem = props => {
	const {
		title,
		time,
		description,
		imageURL = defaultImage,
		_id,
	} = props.recipe;

	return (
		<RecipeItem>
			<RecipeImgWrapper>
				<RecipeImg src={imageURL} alt={title} />
			</RecipeImgWrapper>
			<RecipeWrapper>
				<RecipeTitle>{title}</RecipeTitle>
				<DeleteButton type="button" onClick={props.onDelete}>
					<DeleteIconStyled id="icon-trash" />
				</DeleteButton>
				<RecipeAbout>{description}</RecipeAbout>
				<RecipeTime>{time}</RecipeTime>
				<SeeRecipeBtn to={`/recipes/${_id}`}>See recipes</SeeRecipeBtn>
			</RecipeWrapper>
		</RecipeItem>
	);
};

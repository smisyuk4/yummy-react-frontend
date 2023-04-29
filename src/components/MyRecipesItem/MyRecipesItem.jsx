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
	ImgRecipeIcon,
} from './MyRecipesItem.styled';


export const MyRecipesItem = props => {
	const {
		title,
		time,
		description,
		imageURL,
		_id,
	} = props.recipe;

	const isImgDefault = imageURL.includes('default')

	return (
		<RecipeItem>
			<RecipeImgWrapper>
				{!isImgDefault && <RecipeImg src={imageURL} alt={title} />}
				{isImgDefault && <ImgRecipeIcon id='icon-add-photo-recipe'/> }
			</RecipeImgWrapper>
			<RecipeWrapper>
				<RecipeTitle>{title}</RecipeTitle>
				<DeleteButton type="button" onClick={props.onDelete}>
					<DeleteIconStyled id="icon-trash" />
				</DeleteButton>
				<RecipeAbout>{description}</RecipeAbout>
				<RecipeTime>{time} min</RecipeTime>
				<SeeRecipeBtn to={`/recipes/${_id}`}>See recipes</SeeRecipeBtn>
			</RecipeWrapper>
		</RecipeItem>
	);
};

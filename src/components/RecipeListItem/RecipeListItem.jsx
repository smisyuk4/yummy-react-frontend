import { useDispatch } from 'react-redux';

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

import defaultImage from 'images/recipeImg/flat-Mob-2-lay-assortment-vegetables.png';

export const RecipeListItem = ({ recipe }, onDelete) => {
	// const {
	// 	title,
	// 	time,
	// 	description,
	// 	imageURL = '../../images/recipeImg/flat-Mob-2-lay-assortment-vegetables.png',
	// 	id,
	// } = recipe;

	const title = 'Title';
	const time = '10m';
	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores dignissimos odio, labore quidem inventore autem voluptatem maiores perspiciatis sit necessitatibus, assumenda quo incidunt hic. Rem minima vero nihil expedita quaerat culpa doloribus vel! Exercitationem illum eaque dolor nihil harum, ratione dolore quas optio assumenda quo sit magnam labore pariatur.';
	const imageURL = defaultImage;
	const id = '6845213654565412';

	const dispatch = useDispatch();

	const handleDelete = () => dispatch(onDelete(id));

	return (
		<RecipeItem>
			<RecipeImgWrapper>
				<RecipeImg src={imageURL} alt={title} />
			</RecipeImgWrapper>
			<RecipeWrapper>
				<RecipeTitle>{title}</RecipeTitle>
				<DeleteButton type="button" onClick={handleDelete}>
					<DeleteIconStyled id="icon-trash" />
				</DeleteButton>
				<RecipeAbout>{description}</RecipeAbout>
				<RecipeTime>{time}</RecipeTime>
				<SeeRecipeBtn to="recipes/:id">See recipes</SeeRecipeBtn>
			</RecipeWrapper>
		</RecipeItem>
	);
};

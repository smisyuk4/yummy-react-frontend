import { NavLink } from 'react-router-dom';
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

export const MyRecipesItem = (
  props

  // {
  //   title,
  //   time,
  //   description,
  //   imageURL,
  //   _id,
  //   onDelete,
  // }
) => {
  const { title, time, description, imageURL, _id } = props.recipe;

  const isImgDefault = imageURL.includes('default');

  console.log(_id); //644d986eebbcf2efddd8bf2e

  return (
    <RecipeItem>
      <RecipeImgWrapper>
        {!isImgDefault && <RecipeImg src={imageURL} alt={title} />}
        {isImgDefault && <ImgRecipeIcon id="icon-add-photo-recipe" />}
      </RecipeImgWrapper>
      <RecipeWrapper>
        <RecipeTitle>{title}</RecipeTitle>
        <DeleteButton type="button" onClick={props.onDelete}>
          <DeleteIconStyled id="icon-trash" />
        </DeleteButton>
        <RecipeAbout>{description}</RecipeAbout>
        <RecipeTime>{time} min</RecipeTime>
        <SeeRecipeBtn to={`/ownRecipes/${_id}`}>See recipes</SeeRecipeBtn>
		<NavLink to={`/ownRecipes/644d986eebbcf2efddd8bf2e`}>cat</NavLink>
      </RecipeWrapper>
    </RecipeItem>
  );
};

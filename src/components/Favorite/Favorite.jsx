import { useEffect, useState } from 'react';
import {
	FavoriteArticle,
	FavoriteDeleteBtn,
	FavoriteImg,
	FavoriteItem,
	FavoriteList,
	FavoriteRecipeBox,
	FavoriteRecipeTitle,
	FavoriteSeeBtn,
	FavoriteStyled,
	FavoriteTime,
	FavoriteTitle,
} from './Favorite.styled';

export const Favorite = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState;

	useEffect(() => {
		fetch('http://localhost:3000/recipes/favorite')
			.then(response => response.json())
			.then(data => setFavoriteRecipes(data));
	}, []);

	return (
		<FavoriteStyled>
			<FavoriteTitle>Favorites</FavoriteTitle>
			<FavoriteList>
				{favoriteRecipes.map(recipe => {
					<FavoriteItem>
						<FavoriteImg />
						<FavoriteRecipeBox>
							<FavoriteRecipeTitle>
								{recipe.name}
							</FavoriteRecipeTitle>
							<FavoriteDeleteBtn>icon</FavoriteDeleteBtn>
							<FavoriteArticle>{recipe.text}</FavoriteArticle>
							<FavoriteTime>{recipe.timeToCook}</FavoriteTime>
							<FavoriteSeeBtn>See pecipe</FavoriteSeeBtn>
						</FavoriteRecipeBox>
					</FavoriteItem>;
				})}
			</FavoriteList>
		</FavoriteStyled>
	);
};

// import { useEffect, useState } from 'react';
// import {
//   FavoriteArticle,
//   FavoriteDeleteBtn,
//   FavoriteImg,
//   FavoriteItem,
//   FavoriteList,
//   FavoriteRecipeBox,
//   FavoriteRecipeTitle,
//   FavoriteSeeBtn,
//   FavoriteStyled,
//   FavoriteTime,
//   FavoriteTitle,
// } from './Favorite.styled';

export const Favorite = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		fetch('https://yummy-rest-api.onrender.com/recipes/favorite/')
			.then(response => response.json())
			.then(data => setFavoriteRecipes(data));
	}, [setFavoriteRecipes]);

	return (
		<FavoriteStyled>
			<FavoriteTitle>Favorites</FavoriteTitle>
			<FavoriteList>
				{favoriteRecipes !== null ??
					favoriteRecipes.map(recipe => (
						<FavoriteItem>
							<FavoriteImg />
							<FavoriteRecipeBox>
								<FavoriteRecipeTitle>
									{recipe.title}
								</FavoriteRecipeTitle>
								<FavoriteDeleteBtn>icon</FavoriteDeleteBtn>
								<FavoriteArticle>
									{recipe.instructions}
								</FavoriteArticle>
								<FavoriteTime>{recipe.time}</FavoriteTime>
								<FavoriteSeeBtn>See pecipe</FavoriteSeeBtn>
							</FavoriteRecipeBox>
						</FavoriteItem>
					))}
				;
			</FavoriteList>
		</FavoriteStyled>
	);
};

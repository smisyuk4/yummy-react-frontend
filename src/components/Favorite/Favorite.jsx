import { useEffect, useState } from 'react';
import { fetchFavorite } from './FetchFavorite'
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
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		fetchFavorite()
			.then(({ data }) => setFavoriteRecipes(data))
			.catch(error => error);
	}, []);

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

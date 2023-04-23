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

	console.log(favoriteRecipes);
	console.log();

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
					favoriteRecipes.map(favoriteRecipe => (
						<FavoriteItem>
							<FavoriteImg />
							<FavoriteRecipeBox>
								<FavoriteRecipeTitle>
									{favoriteRecipe.title}
								</FavoriteRecipeTitle>
								<FavoriteDeleteBtn>icon</FavoriteDeleteBtn>
								<FavoriteArticle>
									{favoriteRecipe.instructions}
								</FavoriteArticle>
								<FavoriteTime>
									{favoriteRecipe.time}
								</FavoriteTime>
								<FavoriteSeeBtn>See pecipe</FavoriteSeeBtn>
							</FavoriteRecipeBox>
						</FavoriteItem>
					))}
			</FavoriteList>
		</FavoriteStyled>
	);
};

import { useEffect, useState } from 'react';
import {
	FavoriteItem,
	FavoriteList,
	FavoriteStyled,
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
					<FavoriteItem>{recipe.name}</FavoriteItem>;
				})}
			</FavoriteList>
		</FavoriteStyled>
	);
};

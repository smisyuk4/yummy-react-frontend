import { useEffect, useState } from 'react';
import axios from 'axios';
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

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDE5OTNjODYzZWFmOWJiYTQ2YzY2NSIsImlhdCI6MTY4MjAyMDY2OCwiZXhwIjoxNjg0NjEyNjY4fQ.cc5YEHIsXZ2ZkIFUGCySz5LtjnoU7kjVbeYXtQpyCIw';

const config = {
	headers: {
		auth: `${TOKEN}`,
	},
};

export const fetchFav = async () => {
	const responce = await axios.get(`recipes/favorite?auth=${TOKEN}`, config);
	return responce;
};

export const Favorite = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	console.log(favoriteRecipes);
	console.log();

	useEffect(() => {
		fetchFav()
			.then(({ data }) => setFavoriteRecipes(data))
			.catch(error => error);
	}, [setFavoriteRecipes]);

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

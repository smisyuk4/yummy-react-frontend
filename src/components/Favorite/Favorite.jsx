import { useEffect, useState } from 'react';
import { fetchFavorite } from './FetchFavorite';
import {
	FavoriteArticle,
	FavoriteDeleteBtn,
	FavoriteIcon,
	FavoriteImg,
	FavoriteImgBox,
	FavoriteItem,
	FavoriteList,
	FavoriteRecipeBox,
	FavoriteRecipeTitle,
	FavoriteSeeBtn,
	FavoriteStyled,
	FavoriteTime,
} from './Favorite.styled';

import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';

export const Favorite = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		async function fetch() {
			try {
				const favorit = await fetchFavorite();

				// 		if (filmsByName.results.length === 0){
				// 		  toast('Sorry film not found')

				setFavoriteRecipes(prev => favorit.data.data.recipes);
			} catch (error) {
				console.log(error);
			} finally {
			}
		}

		fetch();
	}, []);

	console.log(favoriteRecipes);
	return (
		<FavoriteStyled>
			<ReusableComponentTitleWithJewelry title="Favorites" />

			<FavoriteList>
				{favoriteRecipes?.length > 0 &&
					favoriteRecipes.map(
						({ _id, title, instructions, time, thumb }) => (
							<FavoriteItem key={_id}>
								<FavoriteImgBox>
									<FavoriteImg src={thumb} />
								</FavoriteImgBox>

								<FavoriteRecipeBox>
									<FavoriteRecipeTitle>
										{title}
									</FavoriteRecipeTitle>
									<FavoriteDeleteBtn>
										<FavoriteIcon
											id="icon-trash"
											fill="#22252a"
											width={11}
											height={12}></FavoriteIcon>
									</FavoriteDeleteBtn>
									<FavoriteArticle>
										{instructions}
									</FavoriteArticle>
									<FavoriteTime>{time} min</FavoriteTime>
									<FavoriteSeeBtn>See pecipe</FavoriteSeeBtn>
								</FavoriteRecipeBox>
							</FavoriteItem>
						)
					)}
			</FavoriteList>
		</FavoriteStyled>
	);
};

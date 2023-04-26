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

export const Favorite = (props, { id }) => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		async function fetch() {
			try {
				const favorit = await fetchFavorite();

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
									<FavoriteDeleteBtn
										type="button"
										onClick={props.onDelete}>
										<FavoriteIcon
											id="icon-trash"
											fill="#EBF3D4"
											width={11}
											height={12}></FavoriteIcon>
									</FavoriteDeleteBtn>
									<FavoriteArticle>
										{instructions}
									</FavoriteArticle>
									<FavoriteTime>{time} min</FavoriteTime>
									<FavoriteSeeBtn to={`/recipes/${_id}`}>
										See pecipe
									</FavoriteSeeBtn>
								</FavoriteRecipeBox>
							</FavoriteItem>
						)
					)}
			</FavoriteList>
		</FavoriteStyled>
	);
};

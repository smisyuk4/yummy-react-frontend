import { useEffect, useState } from 'react';
import { fetchFavorite } from './FetchFavorite';
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

  return (
    <FavoriteStyled>
      <ReusableComponentTitleWithJewelry title="Favorites" />

      <FavoriteList>
        {favoriteRecipes?.length > 0 &&
          favoriteRecipes.map(({ _id, title, instructions, time }) => (
            <FavoriteItem key={_id}>
              <FavoriteImg />
              <FavoriteRecipeBox>
                <FavoriteRecipeTitle>{title}</FavoriteRecipeTitle>
                <FavoriteDeleteBtn>icon</FavoriteDeleteBtn>
                <FavoriteArticle>{instructions}</FavoriteArticle>
                <FavoriteTime>{time}</FavoriteTime>
                <FavoriteSeeBtn>See pecipe</FavoriteSeeBtn>
              </FavoriteRecipeBox>
            </FavoriteItem>
          ))}
      </FavoriteList>
    </FavoriteStyled>
  );
};

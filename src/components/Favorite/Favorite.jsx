import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { fetchFavorite, removeFromFavorites } from './FetchFavorite';

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

export const Favorite = id => {
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

  const onDelete = async id => {
    await removeFromFavorites(id);
    setFavoriteRecipes(prev => prev.filter(recipe => recipe._id !== id));
  };

  return (
    <FavoriteStyled>
      <ReusableComponentTitleWithJewelry title="Favorites" />

      <FavoriteList>
        {!favoriteRecipes ? (
          <ColorRing
            visible={true}
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={['#2a2c36', '#f43e60', '#FFBC00', '#89BC24', '#B8444A']}
          />
        ) : (
          <>
            {favoriteRecipes?.map(
              ({ _id, title, instructions, time, thumb }) => (
                <FavoriteItem key={_id}>
                  <FavoriteImgBox>
                    <FavoriteImg src={thumb} />
                  </FavoriteImgBox>

                  <FavoriteRecipeBox>
                    <FavoriteRecipeTitle>{title}</FavoriteRecipeTitle>
                    <FavoriteDeleteBtn
                      type="button"
                      onClick={() => onDelete(_id)}
                    >
                      <FavoriteIcon
                        id="icon-trash"
                        fill="#EBF3D4"
                        width={11}
                        height={12}
                      ></FavoriteIcon>
                    </FavoriteDeleteBtn>
                    <FavoriteArticle>{instructions}</FavoriteArticle>
                    <FavoriteTime>{time} min</FavoriteTime>
                    <FavoriteSeeBtn to={`/recipes/${_id}`}>
                      See pecipe
                    </FavoriteSeeBtn>
                  </FavoriteRecipeBox>
                </FavoriteItem>
              )
            )}
          </>
        )}
      </FavoriteList>
    </FavoriteStyled>
  );
};

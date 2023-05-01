import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { fetchFavorite, removeFromFavorites } from './FetchFavorite';
import { NoResults } from 'components/NoResults';
import { Pagination } from 'components/SearchingPage/Pagination';
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
  const [page, setPage] = useState(1);
  const [totalFav, setTotalFav] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inDelete, setInDelete] = useState([]);
  const limit = 4;
  let isfetch = 0;
  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const favorit = await fetchFavorite(page, limit);
        setTotalFav(favorit.data.data.totalRecipes);
        setFavoriteRecipes(favorit.data.data.recipes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetch();
  }, [page, limit, isfetch]);

  const handlePagination = selected => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onDelete = async id => {
    try {
      await removeFromFavorites(id);
      setFavoriteRecipes(prev => prev.filter(recipe => recipe._id !== id));
      setInDelete(prev => prev.filter(item => item !== id));
      totalFav > limit && setPage(1);
      isfetch++;
    } catch (error) {
      setInDelete(prev => prev.filter(item => item !== id));
    }
  };

  if (isLoading) {
    return (
      <FavoriteStyled>
        <ReusableComponentTitleWithJewelry title="Favorites" />

        <ColorRing
          visible={true}
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={['#2a2c36', '#f43e60', '#FFBC00', '#89BC24', '#B8444A']}
        />
      </FavoriteStyled>
    );
  }

  return (
    <FavoriteStyled>
      <ReusableComponentTitleWithJewelry title="Favorites" />
      <FavoriteList>
        {favoriteRecipes?.length === 0 ? (
          <NoResults text="Recipes not found" />
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
                      onClick={() => {
                        onDelete(_id);
                        setInDelete(prev => [...prev, _id]);
                      }}
                    >
                      {inDelete.indexOf(_id) >= 0 ? (
                        <ColorRing
                          visible={true}
                          ariaLabel="blocks-loading"
                          height="40px"
                          width="40px"
                          colors={[
                            '#2a2c36',
                            '#92f6f4',
                            '#FcBC00',
                            '#7c94dd',
                            '#31e04c',
                          ]}
                        />
                      ) : (
                        <FavoriteIcon
                          id="icon-trash"
                          fill="#EBF3D4"
                          width={11}
                          height={12}
                        ></FavoriteIcon>
                      )}
                    </FavoriteDeleteBtn>
                    <FavoriteArticle>{instructions}</FavoriteArticle>
                    <FavoriteTime>{time} min</FavoriteTime>
                    <FavoriteSeeBtn to={`/recipes/${_id}`}>
                      See recipe
                    </FavoriteSeeBtn>
                  </FavoriteRecipeBox>
                </FavoriteItem>
              )
            )}
            {totalFav > limit && (
              <Pagination
                page={page}
                pagecount={Math.ceil(totalFav / limit)}
                onChange={handlePagination}
              />
            )}
          </>
        )}
      </FavoriteList>
    </FavoriteStyled>
  );
};

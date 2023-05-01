import * as React from 'react';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import {
  addToFavorites,
  removeFromFavorites,
} from 'components/Favorite/FetchFavorite';
import {
  HeroSection,
  ButtonStyled,
  TitleStyled,
  EllipsisStyled,
  ClockDivStyled,
  ClockDescriptionStyled,
} from './RecipePageHero.styled';
import { Icon } from 'components/Icon';

export const RecipePageHero = ({
  title,
  description,
  time,
  _id,
  isFavoriteBase,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteBase);
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteAdd = id => {
    addToFavorites(id)
      .then(res => {
        setIsFavorite(true);
      })
      .catch(err => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  const handleFavoriteRemove = id => {
    removeFromFavorites(id)
      .then(res => {
        setIsFavorite(false);
      })
      .catch(err => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <HeroSection>
      <TitleStyled>{title}</TitleStyled>
      <EllipsisStyled text={description} length={120} />

      {isFavorite ? (
        <ButtonStyled
          onClick={() => {
            handleFavoriteRemove(_id);
            setIsLoading(true);
          }}
        >
          {isLoading ? (
            <ColorRing
              type="ThreeDots"
              color="#fff"
              height={20}
              width={20}
              timeout={3000}
            />
          ) : (
            'Remove from favorites'
          )}
        </ButtonStyled>
      ) : (
        <ButtonStyled
          onClick={() => {
            handleFavoriteAdd(_id);
            setIsLoading(true);
          }}
        >
          {isLoading ? (
            <ColorRing
              type="ThreeDots"
              color="#fff"
              height={20}
              width={20}
              timeout={3000}
            />
          ) : (
            'Add to favorites'
          )}
        </ButtonStyled>
      )}
      {time !== '' && (
        <ClockDivStyled>
          <Icon id="icon-clock" height="17" width="17" />
          <ClockDescriptionStyled>{time} min</ClockDescriptionStyled>
        </ClockDivStyled>
      )}
    </HeroSection>
  );
};

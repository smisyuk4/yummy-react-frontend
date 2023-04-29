import * as React from 'react';
import { useState } from 'react';
import {
  addToFavorites,
  removeFromFavorites,
} from 'components/Favorite/FetchFavorite';
import {
  HeroSection,
  ButtonStyled,
  TitleStyled,
  PStyled,
  ClockDivStyled,
  ClockDescriptionStyled,
} from './RecipePageHero.styled';
import { Icon } from 'components/Icon';

export const RecipePageHero = ({
  title,
  description,
  time,
  _id,
  // favorites,
  isFavoriteBase,
}) => {
  // const user = useSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(isFavoriteBase);

  const handleFavoriteAdd = id => {
    addToFavorites(id)
      .then(res => {
        setIsFavorite(true);
      })
      .catch(err => console.log(err.message));
  };

  const handleFavoriteRemove = id => {
    removeFromFavorites(id)
      .then(res => {
        setIsFavorite(false);
      })
      .catch(err => console.log(err.message));
  };

  console.log('isFavoriteBase ', isFavoriteBase);
  return (
    <HeroSection>
      <TitleStyled>{title}</TitleStyled>
      <PStyled>{description}</PStyled>

      {isFavorite ? (
        <ButtonStyled onClick={() => handleFavoriteRemove(_id)}>
          Remove from favorites
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={() => handleFavoriteAdd(_id)}>
          Add to favorites
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

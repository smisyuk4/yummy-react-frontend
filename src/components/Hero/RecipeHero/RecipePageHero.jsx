import * as React from 'react';
// import { useEffect } from 'react';
import { HeroSection, ButtonStyled, TitleStyled, PStyled, ClockDivStyled, ClockDescriptionStyled } from './RecipePageHero.styled';
import { Icon } from 'components/Icon';

export const RecipePageHero = ({title, description, time}) => {

  return (
    <HeroSection>
      
				<TitleStyled>{title}</TitleStyled>
        <PStyled>{description}</PStyled>
        
      
      <ButtonStyled>Add to favorite recipe</ButtonStyled>
      {time !== '' && (
      <ClockDivStyled>
        <Icon id="icon-clock" height="17" width="17" />
        <ClockDescriptionStyled>{time} min</ClockDescriptionStyled>
        </ClockDivStyled>
        )}
    </HeroSection>
  ) 
};
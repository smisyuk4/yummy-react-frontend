import styled from '@emotion/styled';

import heroDesk1 from 'images/recipeImg/heroDeck1.png';
import heroMob1 from 'images/recipeImg/flat-Mob-1-lay-assortment-vegetables.png';
import heroTab1 from 'images/recipeImg/flat-Tab-1-lay-assortment-vegetables.png'

export const HeroSection = styled.section`
    background: url(${heroMob1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /* padding-top: 144px;
    padding-bottom: 90px; */
    width: auto; 
    height: 495px;
    text-align: center;
    @media ${props => props.theme.media.tablet} {
       background: url(${heroTab1});
        height: 493px;
        padding-top: 136px;
        padding-bottom: 32px;
        background-repeat: no-repeat;
    }
     @media ${props => props.theme.media.desktop} {
     background-image: url(${heroDesk1});
    padding-top: 164px};  
    `; 

    
export const ButtonStyled = styled.button`
background-color: transparent;
 border-radius: 24px 44px;
 border: 1px solid ${({ theme }) => `${theme.colors.buttonPrimaryBG}`};
  padding: 10px 18px;
  font-size: 10px;
  line-height: 0.6;
  margin-bottom: 42px;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  @media ${props => props.theme.media.tablet} {
      font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 60px;
    border: 2px solid ${({ theme }) => `${theme.colors.buttonPrimaryBG}`};
    }
     @media ${props => props.theme.media.desktop} {
     margin-bottom: 48px;};  
     :hover,
  :focus {
    background-color: ${({ theme }) => `${theme.colors.buttonPrimaryBG}`};
    color: ${({ theme }) => `${theme.colors.buttonLightBG}`};
  }
    `; 

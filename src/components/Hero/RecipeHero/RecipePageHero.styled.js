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
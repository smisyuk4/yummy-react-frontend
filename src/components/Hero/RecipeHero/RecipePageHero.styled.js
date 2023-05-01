import styled from '@emotion/styled';
import EllipsisText from 'react-ellipsis-text';
import heroDesk1 from 'images/recipeImg/flat-lay-assortment-vegetables-Desk-1x.jpg';
import heroDesk2 from 'images/recipeImg/flat-lay-assortment-vegetables-Desk-2x.jpg'
import heroMob1 from 'images/recipeImg/flat-lay-assortment-vegetables-Mob-1x.jpg';
import heroMob2 from 'images/recipeImg/flat-lay-assortment-vegetables-Mob-2x.jpg'
import heroTab1 from 'images/recipeImg/flat-lay-assortment-vegetables-Tab-1x.jpg';
import heroTab2 from 'images/recipeImg/flat-lay-assortment-vegetables-Tab-2x.jpg'

export const HeroSection = styled.section`
  background: url(${heroMob1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 162px;
  padding-right: 38px;
  padding-left: 38px;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -82px;
  height: 353px;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMob2});
  }

  @media ${props => props.theme.media.tablet} {
    background: url(${heroTab1});
    height: 361px;
    padding-top: 160px;
    padding-left: 99px;
    padding-right: 99px;
    margin-top: -88px;
    margin-left: -32px;
    margin-right: -32px;
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroTab2});
  }
  }
  @media ${props => props.theme.media.desktop} {
    background-image: url(${heroDesk1});
    padding-top: 242px;
    padding-left: 100px;
    padding-right: 100px;
    margin-left: -100px;
    margin-right: -100px;
    height: 357px;
    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroDesk2});
  }
  }
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}`};
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
    border: 2px solid ${({ theme }) => `${theme.colors.primary}`};
  }
  @media ${props => props.theme.media.desktop} {
    margin-bottom: 48px;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.buttonLightBG}`};
  }
`;

export const TitleStyled = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  color: ${({ theme }) => `${theme.colors.primary}`};
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 24px;
    max-width: 700px;
    font-size: 44px;
  }
`;

export const EllipsisStyled = styled(EllipsisText)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  max-width: 700px;
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => `${theme.colors.recipeHero}`};

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 24px;
    font-size: 18px;
  }
`;

export const ClockDivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClockDescriptionStyled = styled.p`
  gap: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.4;
  color: ${({ theme }) => `${theme.colors.addRecipeFormFieldsTextColor}`};
  text-align: center;
  letter-spacing: -0.24px;
  margin-left: 10px;
`;

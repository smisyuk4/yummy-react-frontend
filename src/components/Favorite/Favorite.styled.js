import styled from '@emotion/styled';
import { NavLinkStyled } from 'components/ButtonNav/ButtonNav.styled';
import { Icon } from 'components/Icon';

export const FavoriteStyled = styled.div`
  margin-top: 32px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 52px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 84px;
  }
`;

export const FavoriteImgBox = styled.div`
  width: 124px;
  height: 124px;
  flex: 0 0 auto;
  border-radius: 8px;

  @media ${props => props.theme.media.tablet} {
    width: 228px;
    height: 232px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 318px;
    height: 324px;
  }
`;

export const FavoriteList = styled.ul`
  margin-top: 50px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 100px;
  }
`;

export const FavoriteItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 9px;
  background: ${props => props.theme.colors.bgFavoriteItem};
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
  @media ${props => props.theme.media.tablet} {
    gap: 24px;
    padding: 28px 24px;
  }

  @media ${props => props.theme.media.desktop} {
    gap: 54px;
    padding: 40px;
  }
`;

export const FavoriteImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;

  border-radius: 8px;
`;

export const FavoriteIcon = styled(Icon)`
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.colors.strokeTrashIcon};

  @media ${props => props.theme.media.tablet} {
    width: 22px;
    height: 22px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 24px;
    height: 24px;
  }
  &:hover {
    stroke: #ffffff;
  }
`;

export const FavoriteRecipeBox = styled.div`
  position: relative;
  height: 124px;

  @media ${props => props.theme.media.tablet} {
    height: 232px;
  }

  @media ${props => props.theme.media.desktop} {
    height: 324px;
  }
`;

export const FavoriteRecipeTitle = styled.h3`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.24px;

  display: block;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.colorFavoriteTitle};

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 28px;
    font-size: 24px;
  }

  @media ${props => props.theme.media.desktop} {
    margin-bottom: 40px;
  }
`;

export const FavoriteDeleteBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: ${({ theme }) => theme.colors.bgTrashIcon};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: red;
  }

  @media ${props => props.theme.media.tablet} {
    width: 38px;
    height: 38px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 44px;
    height: 44px;
  }
`;

export const FavoriteArticle = styled.p`
  padding-right: 24px;
  font-size: 8px;
  line-height: 125%;
  letter-spacing: -0.02em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: ${props => props.theme.colors.textFavoriteRecipe};

  @media ${props => props.theme.media.tablet} {
    padding-right: 51px;
    font-size: 14px;
    line-height: 129%;
    -webkit-line-clamp: 5;
  }

  @media ${props => props.theme.media.desktop} {
    padding-right: 123px;
    font-size: 18px;
    line-height: 133%;
    -webkit-line-clamp: 6;
  }
`;

export const FavoriteTime = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.colorFavoriteTitle};
  display: inline-block;
  padding: 1px;
  background: ${props => props.theme.colors.bgFavoriteItem};
  width: 100%;

  @media ${props => props.theme.media.tablet} {
    font-size: 14px;
    line-height: 143%;
  }
`;

export const FavoriteSeeBtn = styled(NavLinkStyled)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 6px 14px;

  font-size: 10px;
  line-height: 100%;
  background-color: ${({ theme }) => theme.colors.buttonDarkBG};
  border-color: ${({ theme }) => theme.colors.buttonDarkBG};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
    border-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 14px;
    padding: 12px 32px;
  }

  @media ${props => props.theme.media.desktop} {
    padding: 18px 44px;
    font-size: 16px;
  }
`;

import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const ListBar = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 10px;
  margin: 0 -8px 32px;
  max-width: 1240px;

  display: grid;
  grid-template-columns: 63% 22% 15%;
  align-content: center;

  @media ${props => props.theme.media.tablet} {
    min-width: 664px;
    max-width: 1159px;
    grid-template-columns: 65% 23% 12%;
    margin: 0 0 50px 0;
    padding: 20px;
  }
  @media ${props => props.theme.media.desktop} {
    min-width: 1160px;
    grid-template-columns: 74.6% 18.7% 6.7%;
    padding: 21px 40px;
  }
`;
export const ItemBar = styled.li`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.buttonLightBG};
  &:nth-of-type(2) {
    margin-left: auto;
    margin-right: auto;
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 18px;
  }
`;
export const ShoppingList = styled.ul`
  position: relative;
  z-index: 10;
  max-width: 703px;
  justify-content: center;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 100px;
  }

  @media ${props => props.theme.media.tablet} {
    min-width: 704px;
    max-width: 1159px;
    margin-bottom: 45px;

    &:last-of-type {
      margin-bottom: 200px;
    }
  }
  @media ${props => props.theme.media.desktop} {
    min-width: 1160px;
    margin-right: auto;
    margin-left: auto;

    &:last-of-type {
      margin-bottom: 195px;
    }
  }
`;

export const ItemShoppingList = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.fontColorPassive};
  min-height: 84px;

  max-width: 704px;
  margin-bottom: 24px;

  display: grid;
  align-items: start;
  grid-template-columns: 20.4% 42.6% 22% 15%;

  &:last-of-type {
    margin-bottom: 0;
  }
  @media ${props => props.theme.media.tablet} {
    min-width: 704px;
    max-width: 1160px;
    min-height: 140px;
    grid-template-columns: 15% 48% 25% 9%;
    margin-bottom: 45px;
  }
  @media ${props => props.theme.media.desktop} {
    min-width: 1160px;
    grid-template-columns: 9% 62.5% 24.2% 2%;
  }
`;
export const ContainerImg = styled.div`
  background-color: ${({ theme }) => theme.colors.primarySoft};
  border-radius: 6px;
  width: 48px;
  height: 48px;
  padding: 6px;
  @media ${props => props.theme.media.tablet} {
    width: 81px;
    height: 81px;
    padding: 8px 6px;
  }
`;

export const Image = styled.img`
  background-size: cover;
`;
export const TaglineP = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.fontColorDark};

  & a {
    font-size: 8px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.fontColorDark};
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 16px;
    line-height: 1.5;

    & a {
      font-size: 12px;
    }
  }
`;

export const Measure = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;
  border-radius: 5px;
  min-width: 37px;
  padding: 4px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  @media ${props => props.theme.media.tablet} {
    min-width: 68px;
    border-radius: 4px;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 14px;
  width: 14px;
  margin-right: auto;
  margin-left: auto;
`;
export const CloseIcon = styled(Icon)`
  height: 14px;
  width: 14px;
  stroke: ${({ theme }) => theme.colors.fontColorDark};
  transition: stroke 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover {
    transition: stroke 0.3s ease-in-out, color 0.3s ease-in-out,
      border-color 0.3s ease-in-out;
    stroke: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  @media ${props => props.theme.media.tablet} {
    height: 20px;
    width: 20px;
  }
`;

export const EmptyList = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0.1em;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 132px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;
  }
`;
export const ContainerEmpty = styled.div`
  position: relative;
`;
export const ShopBag = styled(Icon)`
  height: 50px;
  width: 50px;
  fill: ${({ theme }) => theme.colors.primary};

  position: absolute;
  top: -80px;
  left: 47%;
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
    top: -140px;
  }
  @media screen and (min-width: 1440px) {
    height: 85px;
    width: 85px;
  }
`;

export const Total = styled.p`
  position: absolute;
  bottom: 8%;
  right: 15%;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.fontColorDark};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const SpanNum = styled.span`
  margin-left: 8px;
`;

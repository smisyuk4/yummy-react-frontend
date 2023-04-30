import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-bottom: 146px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 164px;
  }
`;

export const CardItem = styled.div`
  position: relative;
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const TitleCategory = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.titleColor};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 44px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;
// #8BAA36
export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 9px 6px #8baa36;
    -webkit-box-shadow: 0px 0px 9px 6px #8baa36;
    -moz-box-shadow: 0px 0px 9px 6px #8baa36;
    animation: 2s ease-in-out 0.5s infinite alternate rotateY;
  }
  @keyframes rotateY {
    0% {
      transform: perspective(800px) rotateY(0deg);
    }
    50% {
      transform: perspective(800px) rotateY(-15deg);
    }

    100% {
      transform: perspective(800px) rotateY(15deg);
    }
  }
`;
export const Image = styled.img`
  object-fit: cover;

  max-height: 100%;
`;

export const CardBox = styled.div`
  z-index: 10;
  position: absolute;
  background: ${({ theme }) => theme.colors.bgTitleCard};
  color: ${({ theme }) => theme.colors.fontHero};
  border-radius: 8px;
  width: calc(100% - 36px);
  bottom: 26px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  margin: 0;
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 24px;
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export const NavToCategory = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.bgMoreBtn};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 6px;

  font-size: 14px;
  line-height: 18px;
  padding: 10px 24px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.04);
    color: ${({ theme }) => theme.colors.buttonLightBGHover};
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

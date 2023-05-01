import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const DivStyled = styled.div`
  padding: 1rem;
  & div {
    position: relative;
    overflow: hidden;
  }
`;

export const H1Styled = styled.h1`
  color: ${({ theme }) => theme.colors.titleColor};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;

  @media (min-width: 425px) {
    flex-wrap: nowrap;
  }
`;

export const H2Styled = styled.h2`
  text-align: center;
  padding: 3px;
  color: ${({ theme }) => theme.colors.buttonDarkBG};
  margin-top: 5px;
`;

export const H3Styled = styled.h3`
  text-align: center;
  padding: 3px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const LiStyled = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 5px;
  aspect-ratio: 1/1;
  @media (min-width: 600px) {
    width: calc(100vw / 2 - 10px);
  }
  @media (min-width: 900px) {
    width: calc(100vw / 3 - 10px);
  }
  @media (min-width: 1440px) {
    width: calc(100vw / 4 - 10px);
  }
  & img {
    border-radius: 6px;
    filter: blur(2px) brightness(0.8);
    transform: scale(1);
    object-fit: cover;
    width: 100%;
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
    @media (min-width: 600px) {
      height: calc(100vw / 2 - 10px);
    }
    @media (min-width: 900px) {
      height: calc(100vw / 3 - 10px);
    }
    @media (min-width: 1440px) {
      height: calc(100vw / 4 - 10px);
    }
  }
  &:hover img {
    filter: blur(0) brightness(1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.04);
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
  &:hover p {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }
`;

export const PStyled = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.titleColor};
  background-color: ${({ theme }) => `${theme.colors.lightBG}A6`};
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
`;

export const TeamSvg = styled(Icon)`
  width: 80px;
  height: 80px;
  transform: translateX(0);
  transition-property: transform;
  transition-duration: 2000ms;
  transition-timing-function: cubic-bezier(0.39, 1.03, 0.82, 0.08);
  &:hover {
    transform: translateX(100vw);
  }
  @media (min-width: 425px) {
    margin-bottom: 10px;
  }
`;
export const Slogan = styled.p`
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: -20px;
  font-size: 12px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.titleColor};
  background-color: ${({ theme }) => `${theme.colors.lightBG}A6`};
  @media (min-width: 425px) {
    margin-top: -35px;
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: -40px;
  }
`;

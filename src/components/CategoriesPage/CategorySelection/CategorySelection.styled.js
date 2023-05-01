import styled from '@emotion/styled';

export const DivStyled = styled.div`
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

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;

  width: calc(100% - 32px);
  margin: 0;
  margin-top: 50px;
  overflow-x: scroll;
  padding-left: 19px;
  padding-bottom: 22px;

  ::-webkit-scrollbar {
    width: 72px; /* ширина для горизонтального скролла */
    height: 4px; /* высота для горизонтального скролла */
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }

  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CategoryItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding: 10px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;

    :not(:last-child) {
      margin-right: 35px;
    }
  }

  .nav-link {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .nav-link:hover,
  .nav-link:active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .isActive {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  gap: 28px;
  margin-bottom: 100px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
    grid-row-gap: 100px;
  }
`;

export const CardItem = styled.li`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;

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

  .card-link {
    color: ${({ theme }) => theme.colors.fontColorDark};
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const CardBox = styled.div`
  z-index: 10;
  position: absolute;
  background: ${({ theme }) => theme.colors.bgModal};
  border-radius: 8px;
  width: calc(100% - 36px);
  left: 18px;
  bottom: 26px;
`;

export const CardTitle = styled.p`
  padding: 16px;
  margin: 0;
`;

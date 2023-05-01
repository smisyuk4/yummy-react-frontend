import styled from '@emotion/styled';

export const DivStyled = styled.div`
  position: relative;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.paginationBG};
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.bgModal};
  display: inline-flex;
  z-index: 100;
  height: 51px;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 55px;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
  }

  & .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.recipeTextColor};
  }
  & .pagination li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
  }
  & .pagination li a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 50%;
  }
  & .pagination li a:hover {
    color: ${({ theme }) => theme.colors.fontHero};
    background-color: ${({ theme }) => theme.colors.paginationBGActive};
  }
  & .pagination li.active a {
    color: ${({ theme }) => theme.colors.fontHero};
    background-color: ${({ theme }) => theme.colors.paginationBGActive};
    border-radius: 50%;
  }

  & li.previous {
    margin-right: 10px;
    color: #656565;
  }
  & li.next {
    margin-left: 10px;
    color: #656565;
  }
  & li.disabled {
    pointer-events: none;
  }
  & li.disabled a {
    cursor: default;
  }
`;

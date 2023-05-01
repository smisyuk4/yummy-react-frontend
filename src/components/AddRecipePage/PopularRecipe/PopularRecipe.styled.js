import styled from '@emotion/styled';

export const DivStyled = styled.div`
  position: relative;

  & p {
    padding: 5px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.titleColor};
    background-color: ${({ theme }) => theme.colors.lightBG};
  }
`;

export const UlStyled = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 200px;

    & a {
      max-width: calc(100% / 2 - 15px);
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 319px;
    flex-direction: column;

    & a {
      max-width: 100%;
    }
  }
`;

import styled from '@emotion/styled';

export const DivStyled = styled.div`
  position: relative;
`;

export const UlStyled = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 100px;

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 200px;

    & a {
      max-width: calc(100% / 2 - 15px);
    }
  }

  @media ${props => props.theme.media.desktop} {
    max-width: 319px;
    flex-direction: column;

    & a {
      max-width: 100%;
    }
  }
`;
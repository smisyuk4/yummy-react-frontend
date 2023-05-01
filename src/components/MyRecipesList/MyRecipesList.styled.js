import styled from '@emotion/styled';

export const RecipesListStyled = styled.ul`
  display: grid;
  gap: 18px;

  @media ${props => props.theme.media.tablet} {
    gap: 40px;
  }

  @media ${props => props.theme.media.tablet} {
    gap: 50px;
  }
`;

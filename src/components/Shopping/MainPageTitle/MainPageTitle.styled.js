import styled from '@emotion/styled';

export const TitleShoppingList = styled.div`
  margin-bottom: 50px;
  margin-top: 29px;

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 72px;
    margin-top: 51px;
  }

  @media ${props => props.theme.media.desktop} {
    margin-top: 79px;
  }
`;

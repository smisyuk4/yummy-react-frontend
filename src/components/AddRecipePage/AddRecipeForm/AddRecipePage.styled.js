import styled from '@emotion/styled';

export const RecipePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 72px;
  }
  @media ${props => props.theme.media.desktop} {
    margin-top: 100px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  gap: 72px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 100px;
    gap: 100px;
  }
  @media ${props => props.theme.media.desktop} {
    flex-direction: row;
    margin-bottom: 200px;
    gap: 121px;
  }
`;

export const OtherDiv = styled.div`
  @media ${props => props.theme.media.desktop} {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`;

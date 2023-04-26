import styled from '@emotion/styled';

export const DivStyled = styled.div``;

export const UlStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  grid-gap: 24px;
  margin-bottom: 100px;

  @media screen ${props => props.theme.media.destop} {
    /* grid-template-columns: minmax(319px, 1fr); */
    /* display: block;
    width: 319px; */
  }
`;
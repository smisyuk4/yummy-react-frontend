import styled from '@emotion/styled';

export const TitleH = styled.h1`
  margin-bottom: 32px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.fontColorDark};

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 40px;
  }
`;

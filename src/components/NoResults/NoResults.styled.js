import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  width: 208px;
  margin: 0 auto 24px auto;
  @media ${props => props.theme.media.tablet} {
    width: 350px;
    margin-bottom: 32px;
  }
`;

export const NoResImg = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.textNoResultsColor};

  opacity: 0.5;

  @media ${props => props.theme.media.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
`;

import styled from '@emotion/styled';
import { flexBox } from 'styles/mixins';
import { Icon } from 'components/Icon';

export const DivStyled = styled.div`
  ${flexBox};
`;
export const SonetLinksList = styled.ul`
  ${flexBox};
  padding: 15px 28px;
  border-radius: 6px;
  gap: 16px;

  & > a {
    padding: 0;
    margin: 0;
  }
`;

export const IconSonetLink = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.followUsColor};
  &:hover {
    fill: ${({ theme }) => theme.colors.followUsColorHover};
  }
`;

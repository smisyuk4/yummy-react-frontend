import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const LiStyled = styled.li`
  border-bottom: 1px solid #707070;
`;

export const NavLinkStyled = styled(Link)`
  display: flex;
  padding-bottom: 13px;
  padding-right: 14px;
`;

export const ImgStyled = styled.img`
  margin-right: 12px;
  border-radius: 8px;
`;

export const HStyled = styled.h3`
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.fontColorDark};
`;

export const PStyled = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

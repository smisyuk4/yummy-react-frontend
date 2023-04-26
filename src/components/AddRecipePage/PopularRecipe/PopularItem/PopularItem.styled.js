import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import EllipsisText from "react-ellipsis-text";

export const NavLinkStyled = styled(Link)`
  display: flex;
  height: 98px;
  border-bottom: 1px solid #707070;
`;

export const ImgStyled = styled.img`
  margin-right: 12px;
  margin-bottom: 13px;
  width: 85px;
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

export const EllipsisTextStyled = styled(EllipsisText)`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

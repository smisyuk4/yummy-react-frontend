import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  color: ${({ theme }) => theme.colors.buttonLightBG};
  border-radius: 24px 44px;
  border: 1px solid ${({ theme }) => theme.colors.buttonPrimaryBG};
  padding: 12px 24px;
  margin: 6px;
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  &:hover {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
      border-color 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.buttonDarkBG};
    border-color: ${({ theme }) => theme.colors.buttonDarkBG};
  }
  @media (min-width: 768px) {
    padding: 22px 44px;
    margin: 9px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NavLinkStyledLight = styled(NavLinkStyled)`
  background-color: ${({ theme }) => theme.colors.buttonLightBG};
  color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
    color: ${({ theme }) => theme.colors.buttonLightBG};
    border-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  }
`;

export const FormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 110px;
  margin-top: 22px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.buttonPrimaryBG};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
  color: ${({ theme }) => theme.colors.buttonLightBG};
  font-size: 14px;
  line-height: 21px;
  transition: color 0.3s ease-in-out;

  &:hover {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.buttonDarkBG};
  }
`;

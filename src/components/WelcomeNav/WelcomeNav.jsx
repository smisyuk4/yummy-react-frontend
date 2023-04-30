import { NavStyled } from './WelcomeNav.styled';
import {
  NavLinkStyled,
  NavLinkStyledLight,
} from 'components/ButtonNav/ButtonNav.styled';

export const WelcomeNav = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/register">Registration</NavLinkStyled>
      <NavLinkStyledLight to="/login">Sign in</NavLinkStyledLight>
    </NavStyled>
  );
};

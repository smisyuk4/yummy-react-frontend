import { HeaderStyled } from './Header.styled';
import {UserLogo} from './UserLogo/UserLogo'
export const Header = () => {
  return <HeaderStyled>
    <UserLogo />
  </HeaderStyled>;
};
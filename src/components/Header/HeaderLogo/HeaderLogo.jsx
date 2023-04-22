import { HeaderLogoStyled } from './HeaderLogo.styled';
import logoImg from '../../../images/logo.png'

export const HeaderLogo = () => {
  return <HeaderLogoStyled to="/" >
            <img src={logoImg} alt='logo'></img>
        </HeaderLogoStyled>;
};
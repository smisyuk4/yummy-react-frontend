import { HeaderLogoStyled } from './HeaderLogo.styled';
import logoImg from '../../../images/logo.png'
import { Icon } from 'components/Icon';

export const HeaderLogo = () => {
  return <HeaderLogoStyled to="/" >
            <img src={logoImg} alt='logo'></img>

            {/* delete */}
            <div style={{backgroundColor: "grey"}}>
              <Icon id="icon-knife-btn" height="50" width="50"/>
            </div>
            {/* delete */}
        </HeaderLogoStyled>;
};
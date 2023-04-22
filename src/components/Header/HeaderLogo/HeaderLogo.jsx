import { HeaderLogoStyled } from './HeaderLogo.styled';
import { Icon } from 'components/Icon';

export const HeaderLogo = () => {
  return <HeaderLogoStyled to="/" >
            <div style={{backgroundColor: "grey"}}>
              <Icon id="icon-knife-btn" height="50" width="50" />
            </div>           
        </HeaderLogoStyled>;
};
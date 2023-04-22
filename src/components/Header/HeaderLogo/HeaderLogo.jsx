import { HeaderLogoStyled } from './HeaderLogo.styled';
import logoImg from '../../../images/logo.png'
import { Icon } from 'components/Icon';

const arrIcons = ["icon-pagination-right" , "icon-checkbox", "icon-clock", "icon-pagination-left", "icon-trash", "icon-square", "icon-plus", "icon-minus", "icon-photo-camera", "icon-add-photo-recipe", "icon-switch-body", "icon-switch-button", "icon-letter", "icon-arrow-right", "icon-close", "icon-edit", "icon-add", "icon-validation-attention", "icon-lock" , "icon-validation-success", 'icon-validation-error', 'icon-facebook','icon-knife-btn', 'icon-youtube', "icon-twitter", "icon-instagram" , 'icon-search', "icon-person", ]

export const HeaderLogo = () => {
  return <HeaderLogoStyled to="/" >
            <img src={logoImg} alt='logo'></img>

            {/* delete */}
            <div style={{backgroundColor: "grey"}}>
              {arrIcons.map(item => <Icon id={item} height="50" width="50" fill='red' stroke='green'/>)} 
              {/* <Icon id="icon-knife-btn" height="50" width="50" fill='red' stroke='green'/> */}
            </div>
            {/* delete */}
            
        </HeaderLogoStyled>;
};
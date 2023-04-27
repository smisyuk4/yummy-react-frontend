import { TogglerBurger, TogglerOverlayBurger, TogglerBtnBurger } from './Toggler.styled';

export const TogglerBurgerMenu = ({toggleTheme, darkTheme}) => {
  return <TogglerBurger type='button' className={(darkTheme ? 'active' : null)} onClick={toggleTheme} >
            <TogglerOverlayBurger id="icon-switch-body" />
            <TogglerBtnBurger id="icon-switch-button" />
          </TogglerBurger>
};
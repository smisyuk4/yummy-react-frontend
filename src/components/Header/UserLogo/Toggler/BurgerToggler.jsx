import { TogglerBurger, TogglerOverlayBurger, TogglerBtnBurger } from './Toggler.styled';


export const TogglerBurgerMenu = ({toggleTheme, darkTheme, closeModal, themeToggler}) => {

  const onChangeTheme = () => {
    toggleTheme()
    themeToggler()
    closeModal()
  }

  return <TogglerBurger type='button' className={(darkTheme ? 'active' : null)} onClick={onChangeTheme} >
            <TogglerOverlayBurger id="icon-switch-body"/>
            <TogglerBtnBurger id="icon-switch-button" />
          </TogglerBurger>
};
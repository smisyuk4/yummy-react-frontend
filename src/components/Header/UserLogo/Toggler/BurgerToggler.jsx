import { TogglerBurger, TogglerOverlayBurger, TogglerBtnBurger } from './Toggler.styled';

export const TogglerBurgerMenu = ({toggleTheme, darkTheme, themeToggler, closeModal}) => {

  const onChangeTheme = () => {
    toggleTheme()
    console.log(themeToggler)
    themeToggler()
    closeModal()
  }
  return <TogglerBurger type='button' className={(darkTheme ? 'active' : null)} onClick={onChangeTheme} >
            <TogglerOverlayBurger id="icon-switch-body" />
            <TogglerBtnBurger id="icon-switch-button" />
          </TogglerBurger>
};
import { TogglerBurger, TogglerOverlayBurger, TogglerBtnBurger } from './Toggler.styled';
import { useEffect, useState } from 'react';

export const TogglerBurgerMenu = ({toggleTheme, closeModal, themeToggler}) => {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'LightTheme') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  }, [darkTheme]);

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
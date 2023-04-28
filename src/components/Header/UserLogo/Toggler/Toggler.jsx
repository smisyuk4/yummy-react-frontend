import { WrapperToggler, TogglerOverlay, TogglerBtn } from './Toggler.styled';
import { useEffect } from 'react';

export const Toggler = ({toggleTheme, darkTheme, themeToggler, closeModal}) => {

  useEffect(() => {
    document.addEventListener("keydown", onCloseModal);
    return () => document.removeEventListener("keydown", onCloseModal)
});
const onCloseModal = ({target, currentTarget, code}) => {
  if(target === currentTarget || code === "Escape") {
    console.log(code)
    closeModal()
  }
};

  const onChangeTheme = () => {
    toggleTheme()
    themeToggler()
    onCloseModal()
  }
  return <WrapperToggler type='button' className={(darkTheme ? 'active' : null)} onClick={onChangeTheme} >
            <TogglerOverlay id="icon-switch-body" />
            <TogglerBtn id="icon-switch-button" />
          </WrapperToggler>
};
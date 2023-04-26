import { useState, useEffect } from "react";
import {createPortal} from "react-dom";
import { BurgerMenuDiv, BtnCloseModal, HeaderLogoDiv, BurgerNavigationNav, ModalDiv, CloseIcon, SearchIcon } from './BurgerMenu.styled';
import { HeaderNavlink } from '../HeaderNavigation/HeaderNavigation.styled';
import { HeaderLogo } from '../HeaderLogo';
import { TogglerBurgerMenu } from "../UserLogo/Toggler/BurgerToggler";

const modalRoot = document.getElementById('modal-root');


export const BurgerMenu = ({closeModal}) => {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    document.addEventListener("keydown", onCloseModal);
    
    return () => document.removeEventListener("keydown", onCloseModal)
});

const togglerTheme = () => {
  darkTheme ? setDarkTheme(false) : setDarkTheme(true)
}

  const onCloseModal = ({target, currentTarget, code}) => {
      if(target === currentTarget || code === "Escape") {
        console.log(code)
        closeModal()
      }
  };


  return createPortal(
    <BurgerMenuDiv onClick={onCloseModal}>
      <ModalDiv close={closeModal}>
        <HeaderLogoDiv onClick={closeModal}>
           <HeaderLogo />
          <BtnCloseModal onClick={closeModal}>
            <CloseIcon id="icon-close"/>
          </BtnCloseModal>
        </HeaderLogoDiv>
        
        <BurgerNavigationNav onClick={closeModal} >
            <HeaderNavlink to="/categories/Breakfast">Categories</HeaderNavlink>
            <HeaderNavlink to="/add">Add recipes</HeaderNavlink>
            <HeaderNavlink to="/my">My recipes</HeaderNavlink>
            <HeaderNavlink to="/favorite ">Favorites</HeaderNavlink>
            <HeaderNavlink to="/shopping-list">Shopping list</HeaderNavlink>
            <HeaderNavlink to="/search">
              <SearchIcon id="icon-search"></SearchIcon>
            </HeaderNavlink>  
        </BurgerNavigationNav>
      </ModalDiv>
      <TogglerBurgerMenu toggleTheme={togglerTheme} darkTheme={darkTheme}  />
    </BurgerMenuDiv>,
     modalRoot
     );
};
import { useEffect } from "react";
import {createPortal} from "react-dom";
import { BurgerMenuDiv, BtnCloseModal, HeaderLogoDiv, BurgerNavigationNav, ModalDiv, CloseIcon } from './BurgerMenu.styled';
import { HeaderNavlink, SearchImg } from '../HeaderNavigation/HeaderNavigation.styled';
import searchImg from 'images/headerImges/search.png';
import { HeaderLogo } from '../HeaderLogo';

const modalRoot = document.getElementById('modal-root');


export const BurgerMenu = ({closeModal}) => {
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


  return createPortal(
    <BurgerMenuDiv onClick={onCloseModal}>
      <ModalDiv close={closeModal}>
        <HeaderLogoDiv>
           <HeaderLogo />
          <BtnCloseModal onClick={closeModal}>
            <CloseIcon id="icon-close"/>
          </BtnCloseModal>
        </HeaderLogoDiv>
        
        <BurgerNavigationNav onClick={closeModal} >
            <HeaderNavlink to="/categories/:categoryName">Categories</HeaderNavlink>
            <HeaderNavlink to="/add">Add recipes</HeaderNavlink>
            <HeaderNavlink to="/my">My recipes</HeaderNavlink>
            <HeaderNavlink to="/favorite ">Favorites</HeaderNavlink>
            <HeaderNavlink to="/shopping-list">Shopping list</HeaderNavlink>
            <HeaderNavlink to="/search">
              <SearchImg src={searchImg} alt='search'></SearchImg>
            </HeaderNavlink>  
        </BurgerNavigationNav>
      </ModalDiv>
    </BurgerMenuDiv>,
     modalRoot
     );
};
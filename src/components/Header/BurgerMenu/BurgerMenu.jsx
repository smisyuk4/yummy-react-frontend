import { useEffect } from "react";
import {createPortal} from "react-dom";
import { BurgerMenuDiv, BtnCloseModal, HeaderLogoDiv, BurgerNavigationNav, ModalDiv } from './BurgerMenu.styled';
import { HeaderNavlink, SearchImg } from '../HeaderNavigation/HeaderNavigation.styled';
import searchImg from 'images/headerImges/search.png';
import { Icon } from 'components/Icon';

const modalRoot = document.getElementById('modal-root');


export const BurgerMenu = ({onCloseModal}) => {

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    
    return () => document.removeEventListener("keydown", closeModal)
});


  const closeModal = ({target, currentTarget, code}) => {
      if(target === currentTarget || code === "Escape") {
        console.log(code)
        onCloseModal()
      }
  };


  return createPortal(
    <BurgerMenuDiv onClick={closeModal}>
      <ModalDiv close={closeModal}>
        <HeaderLogoDiv>
          <div style={{backgroundColor: "grey"}}>
              <Icon id="icon-knife-btn" height="50" width="50" />
          </div>  
          <BtnCloseModal onClick={closeModal}>
            <span>X</span>
          </BtnCloseModal>
        </HeaderLogoDiv>
        
        <BurgerNavigationNav>
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
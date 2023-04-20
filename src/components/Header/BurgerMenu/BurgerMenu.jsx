import { useEffect } from "react";
import {createPortal} from "react-dom";
import { BurgerMenuDiv, BtnCloseModal } from './BurgerMenu.styled';
import {BurgerNavigationNav, ModalDiv} from './BurgerMenu.styled'
import { HeaderNavlink, SearchImg } from '../HeaderNavigation/HeaderNavigation.styled';
import CloseModalImg from 'images/headerImges/x.png'
import searchImg from 'images/headerImges/search.png';


const modalRoot = document.getElementById('modal-root');


export const BurgerMenu = ({onCloseModal}) => {

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    
    return () => document.removeEventListener("keydown", closeModal)
}, []);

  const closeModal = ({target, currentTarget, code}) => {
      if(target === currentTarget || code === "Escape") {
        onCloseModal()
      }
  };


  return createPortal(
    <BurgerMenuDiv onClick={onCloseModal}>
      <ModalDiv close={onCloseModal}>
        <BtnCloseModal onClick={onCloseModal}>
          <span>X</span>
          {/* <CloseModalImg src={CloseModalImg} alt='cross'></CloseModalImg> */}
        </BtnCloseModal>
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
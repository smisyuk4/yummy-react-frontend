import { DivStyled, OverlayDiv, WrapperEdit, LogOutBtn } from './PopupUser.styled';
import {IditIcon} from './edit-01'
import { useState, useEffect } from 'react';
import { ModalUserProfil } from '../ModalUserProfil';


export const PopupUser = ({open, close}) => {

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    
    return () => document.removeEventListener("keydown", closeModal)
});

  const closeModal = ({target, currentTarget, code}) => {
    if(target === currentTarget || code === "Escape") {
      console.log(target)
        close()
    }
};

  if(!open) return null;

  return <OverlayDiv onClick={closeModal}>
     <DivStyled>
    <WrapperEdit onClick={() => setIsOpen(true)}>
      <p>Edit profile</p>
      <IditIcon />
    </WrapperEdit>
    <LogOutBtn>Log out</LogOutBtn>
    <ModalUserProfil open={isOpen} close={onClose} />
  </DivStyled>
  </OverlayDiv>
 
};
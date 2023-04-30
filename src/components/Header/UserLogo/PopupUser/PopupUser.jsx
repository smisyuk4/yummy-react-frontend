import { OverlayDiv, WrapperEdit, EditText, LogOutBtn, EditIcon } from './PopupUser.styled';
import { useState } from 'react';
import { ModalUserProfil } from '../ModalUserProfil';
import { ModalLogOut } from '../ModalLogOut';

export const PopupUser = ({openPopUp, closePopUp, close}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLogOutModal, setIsLogOutModal] = useState(false)

  const onCloseModal = (e) => {
    e.stopPropagation();
    setIsOpenModal(false)
  }
  const onCloseLogOutModal = (e) => {
    e.stopPropagation();
    setIsLogOutModal(false)
  }

  return <OverlayDiv onClick={closePopUp} className={
    (openPopUp ? 'open' : 'close')
 }>
      <WrapperEdit onClick={() => setIsOpenModal(true)}>
        <EditText>Edit profile</EditText>
        <EditIcon id="icon-edit" />
      </WrapperEdit>
      <LogOutBtn onClick={() => setIsLogOutModal(true)}>Log out</LogOutBtn>
      <ModalUserProfil isOpen={isOpenModal} close={onCloseModal} />
      <ModalLogOut isOpen={isLogOutModal} close={onCloseLogOutModal} />
  </OverlayDiv>
};
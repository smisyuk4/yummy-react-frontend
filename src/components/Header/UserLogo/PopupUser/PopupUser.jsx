import { 
  // DivStyled, 
  OverlayDiv, WrapperEdit, LogOutBtn } from './PopupUser.styled';
import {IditIcon} from './edit-01'
import { useState } from 'react';
import { ModalUserProfil } from '../ModalUserProfil';
import { ModalLogOut } from '../ModalLogOut';

export const PopupUser = ({openPopUp, closePopUp, close}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLogOutModal, setIsLogOutModal] = useState(false)

  const onCloseModal = () => {
    setIsOpenModal(false)
  }
  const onCloseLogOutModal = () => {
    setIsLogOutModal(false)
  }

  return <OverlayDiv onClick={closePopUp} className={
    (openPopUp ? 'open' : 'close')
 }>
    {/* <ModalDiv> */}
      {/* <DivStyled> */}
      <WrapperEdit onClick={() => setIsOpenModal(true)}>
        <p>Edit profile</p>
        <IditIcon />
      </WrapperEdit>
      <LogOutBtn onClick={() => setIsLogOutModal(true)}>Log out</LogOutBtn>
      <ModalUserProfil isOpen={isOpenModal} close={onCloseModal} />
      <ModalLogOut isOpen={isLogOutModal} close={onCloseLogOutModal} />
      {/* </DivStyled> */}
    {/* </ModalDiv> */}
  </OverlayDiv>
};
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { BurgerMenuDiv, BtnCloseModal } from './BurgerMenu.styled';
import { HeaderNavigation } from '../HeaderNavigation';
import CloseModalImg from 'images/headerImges/x.png'


export const BurgerMenu = () => {

  const [modalOpen, setModalOpen] = useState(true);

  const openModal = (modalContent) => {
    setModalOpen(true);
  }
  const closeModal = ()=> {
      setModalOpen(false);
  }

  return (
    <BurgerMenuDiv>
      {modalOpen && (<Modal close={closeModal}>
        <BtnCloseModal onClick={closeModal}>
          <span>X</span>
          {/* <CloseModalImg src={CloseModalImg} alt='cross'></CloseModalImg> */}
        </BtnCloseModal>
      <HeaderNavigation />
      </Modal>)}
    </BurgerMenuDiv>
  ) 
};
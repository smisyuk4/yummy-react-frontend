import { useState } from 'react';
import { HeaderStyled } from './Header.styled';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNavigation } from './HeaderNavigation';
import {UserLogo} from './UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu';


export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = ()=> {
      setModalOpen(false);
  }

  return <HeaderStyled>
    {modalOpen && <BurgerMenu onCloseModal={closeModal} />}
    <HeaderLogo />
    <HeaderNavigation />
    <UserLogo onOpenModal={openModal} />
  </HeaderStyled>;
};
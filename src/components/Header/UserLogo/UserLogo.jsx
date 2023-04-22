import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, BurgerMuneBtn, BurgerMenuImg } from './UserLogo.styled';
import burgerMenuImg from 'images/menu-03.png'
import userImg from 'images/user.png'
import { PopupUser } from './PopupUser/PopupUser'

export const UserLogo = ({ onOpenModal }) => {

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    console.log('edit modal open')
    setIsOpen(false)
  }
  return <UserLogoDiv onClick={() => setIsOpen(true)}>
          <WrapperImg onClick={() => setIsOpen(true)}>
            <UserAvatarImg src={userImg} alt="avatar"></UserAvatarImg>      
          </WrapperImg>
          <UserNameP>User's name</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuImg src={burgerMenuImg} alt=""></BurgerMenuImg>
        </BurgerMuneBtn>
        <PopupUser open={isOpen} close={onClose} />
  </UserLogoDiv>;
};
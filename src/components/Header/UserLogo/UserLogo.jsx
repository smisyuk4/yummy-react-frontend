import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, UserIcon, BurgerMuneBtn, BurgerMenuImg } from './UserLogo.styled';
import burgerMenuImg from 'images/menu-03.png'
import userImg from 'images/user.png'
import { PopupUser } from './PopupUser/PopupUser'

export const UserLogo = ({ onOpenModal }) => {

  
  return <UserLogoDiv >
          <WrapperImg >
            {/* <UserAvatarImg src={userImg} alt="avatar"></UserAvatarImg> */}
            <UserIcon id="icon-person"/>      
          </WrapperImg>
          <UserNameP>User's name</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuImg id='icon-burger' />
        </BurgerMuneBtn>
        <PopupUser />
  </UserLogoDiv>;
};
import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, AvatarUser, BurgerMuneBtn, BurgerMenuIcon } from './UserLogo.styled';
import { PopupUser } from './PopupUser/PopupUser'
import { useSelector } from 'react-redux';


export const UserLogo = ({ onOpenModal }) => {
 const [openPopUp, setOpenPopUp] = useState(false)

 const onClosePopUp = () => {
  setOpenPopUp(false)
}

  const auth = useSelector(state => state.auth)
  const user = auth.user
  const isGravatar = user.avatarURL.includes('gravatar')
  console.log(auth.isLoggedIn)

  return <UserLogoDiv >
          <WrapperImg onClick={() => setOpenPopUp(true)} >
            {isGravatar && <AvatarUser  id="icon-person" />}
            {!isGravatar && <UserAvatarImg src={user.avatarURL} />}
          </WrapperImg>
          <UserNameP>{user.name}</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuIcon id='icon-burger' />
        </BurgerMuneBtn>
        <PopupUser 
          openPopUp={openPopUp}
          closePopUp={onClosePopUp}
        />
  </UserLogoDiv>;
};
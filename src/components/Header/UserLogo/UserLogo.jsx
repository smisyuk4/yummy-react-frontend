import { useState } from 'react';
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, WrapperToggler, Toggler, TogglerBtn, AvatarUser, BurgerMuneBtn, BurgerMenuIcon } from './UserLogo.styled';
import { PopupUser } from './PopupUser/PopupUser'
import { useSelector } from 'react-redux';


export const UserLogo = ({ onOpenModal }) => {
 const [openPopUp, setOpenPopUp] = useState(false)
 const [darkTheme, setDarkTheme] = useState(false)

 const onClosePopUp = () => {
  setOpenPopUp(false)
}

const togglerTheme = () => {
  darkTheme ? setDarkTheme(false) : setDarkTheme(true)
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
          <WrapperToggler type='button' className={(darkTheme ? 'active' : null)} onClick={togglerTheme} >
            <Toggler id="icon-switch-body" />
            <TogglerBtn id="icon-switch-button" />
          </WrapperToggler>
           
        <PopupUser 
          openPopUp={openPopUp}
          closePopUp={onClosePopUp}
        />
  </UserLogoDiv>;
};
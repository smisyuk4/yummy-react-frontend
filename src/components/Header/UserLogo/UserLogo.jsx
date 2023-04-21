
import { UserLogoDiv, UserNameP, WrapperImg, UserAvatarImg, BurgerMuneBtn, BurgerMenuImg } from './UserLogo.styled';
import burgerMenuImg from 'images/menu-03.png'
import userImg from 'images/user.png'


export const UserLogo = ({ onOpenModal }) => {


  return <UserLogoDiv>
          <WrapperImg>
            <UserAvatarImg src={userImg} alt="avatar"></UserAvatarImg>      
          </WrapperImg>
          <UserNameP>User's name</UserNameP>
          <BurgerMuneBtn onClick={onOpenModal}>
          <BurgerMenuImg src={burgerMenuImg} alt=""></BurgerMenuImg>
        </BurgerMuneBtn>
  </UserLogoDiv>;
};
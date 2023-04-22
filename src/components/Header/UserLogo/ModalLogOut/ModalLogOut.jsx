import { DivStyled } from './ModalLogOut.styled';

export const ModalLogOut = () => {
  return <DivStyled>
    <span>x</span>
    <p>Are you sure you want to log out?</p>
    <BtnLogOut>
        Log out
    </BtnLogOut>
    <BtnCancel>
        Cancel
    </BtnCancel>
  </DivStyled>;
};
import { ButtonStyled } from './BtnOval.styled';

export const BtnOval = ({ children, color }) => {
  return <ButtonStyled color={color}>
    {children}
  </ButtonStyled>;
};
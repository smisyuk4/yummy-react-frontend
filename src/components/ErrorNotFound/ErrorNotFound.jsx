import {
  DivStyled,
  ImageStyled,
  TitleStyled,
  TextStyled,
  TextBox,
} from './ErrorNotFound.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import image from 'images/404NotFound/bro.svg';

export const ErrorNotFound = () => {
  return (
    <DivStyled>
      <ReusableComponentTitleWithJewelry />
      <ImageStyled src={image} alt="error"></ImageStyled>
      <TextBox>
        <TitleStyled>We are sorry,</TitleStyled>
        <TextStyled>
          but the page you were looking for can’t be found..
        </TextStyled>
      </TextBox>
    </DivStyled>
  );
};

import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import {flexBox} from 'styles/mixins';

export const DivStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;

`;

export const ModalProfil = styled.div`
    position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
    padding: 32px 24px;
    border: 1px solid #8BAA36;
    border-radius: 18px;
    width: 330px;
    text-align: center;

    background: #FFF;
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
`
export const OvarlayImg = styled.div`
position: relative;
  width: 88px;
  height: 88px;
 text-align: center;
 border-radius: 50%;
 background: #D9D9D9;
 ${flexBox};

`
export const LabelAvatar = styled.label`
 margin-bottom: 54px;
`
export const InputAvatar = styled.input`
    display: none;
`

export const Figure = styled.figure`
    position: relative;
  width: 88px;
  height: 88px;
`
export const Figcaption = styled.figcaption`
    cursor: pointer;
  position: absolute;
  top: 0px;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out .3s;
  &:hover {
    opacity: 1;
  background-color: rgba(0, 0, 0, .5);
  }
`
export const ImgAvatar = styled.img`
display: block;
   cursor: pointer;
  width: 88px;
  height: 88px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out .3s;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  }
`
export const ImgDefault = styled.img`
margin-top: 15px;
  width: 50px;
  height: 50px;
`
export const IconPerson = styled(Icon)`
  width: 50px;
  height: 50px;
  stroke: #C4C4C4;
`

export const IconPlus = styled(Icon)`
position: absolute;
top: 70px;
right: 13px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  fill: #8BAA36;
`
export const Input = styled.input`
height: 48px;
margin-bottom: 24px;
border: 1px solid #23262A; 
border-radius: 6px;
`
export const FormUpdateUser = styled.form`
  ${flexBox};
  flex-direction: column;

`
export const IconPersonInput = styled(IconPerson)`
  width: 15px;
  height: 15px;

`
export const IconEdit = styled(Icon)`
width: 15px;
  height: 15px;
  fill: #23262A;
`
import styled from '@emotion/styled';

export const DivStyled = styled.div`
z-index: 1000;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(144, 144, 144, 0.5);
`;

export const ModalProfil = styled.div`
    position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
    padding: 15px;
    border: 1px solid #8BAA36;
    border-radius: 18px;
    width: 161px;
    height: 130px;
    text-align: center;
`
export const OvarlayImg = styled.div`
 text-align: center;
`
export const LabelAvatar = styled.label`


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
export const ImgAvatar = styled.input`
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


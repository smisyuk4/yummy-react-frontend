import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import {flexBox} from 'styles/mixins';
import { BtnSybscribe } from 'components/Footer/SubscriptionForm/SubscriptionForm.styled';
import bgImgM from 'images/headerImges/burger-bg-m.png'

export const DivStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background: rgb(235,243,212) url(${bgImgM}) no-repeat right bottom;
`;

export const ModalProfil = styled.div`
    position: absolute;
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
    object-fit: cover;

    &:hover {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    }
`
export const FigureAvatar = styled.figure`
    position: relative;
    width: 88px;
    height: 88px;
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
    box-sizing: border-box;
    position: absolute;
    top: 70px;
    right: 13px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    stroke: #fff;
    background: #8BAA36;
    padding: 5px;
    &:hover {
        stroke: ${({ theme }) => theme.colors.primary};
        background: #fff;
    }
`
export const Input = styled.input`
    height: 48px;
    width: inherit;
    box-sizing: border-box;
    border: 1px solid #23262A; 
    border-radius: 6px;
    padding-left: 40px;
    

  &::placeholder {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #23262A;
      opacity: 0.8;
    }
    &:focus {
		outline: 1px solid ${({ theme }) => theme.colors.fontColor};
		border-color: ${({ theme }) => theme.colors.primary};
	} 
`
export const FormUpdateUser = styled.form`
    ${flexBox};
    flex-direction: column;
`
export const IconPersonInput = styled(IconPerson)`
    width: 18px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    stroke: #23262A;
`
export const IconEdit = styled(Icon)`
    width: 15px;
    height: 15px;
    fill: #23262A;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
`
export const LabelInput = styled.label`
    position: relative;
    margin-bottom: 24px;
    width: 100%;
`
export const BtnModalUser = styled(BtnSybscribe)`
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    text-align: center;

    color: #FAFAFA;
    @media ${props => props.theme.media.tablet} {
          width: 100%;
      }
`
export const IconCross = styled(Icon)`
    width: 13px;
    height: 13px;
    stroke: #23262A;
    position: absolute;
    top: 22px;
    right: 22px;
    transform: translateY(-50%);
    &:hover {
        stroke: ${({ theme }) => theme.colors.primary};
    }
`
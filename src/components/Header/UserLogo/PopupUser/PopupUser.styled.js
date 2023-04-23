import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';

export const OverlayDiv = styled.div`
   width: 100%;
    height: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
`
export const ModalDiv = styled.div`
     max-width: 50%;
    border-radius: 10px;
    position: relative;
    top: 0;
    right: 0;
    padding: 25px 15px 15px;
    background-color: #fff;
`
export const DivStyled = styled.div`
    padding: 15px;
    border: 1px solid #8BAA36;
    border-radius: 18px;
    width: 161px;
    height: 130px;
    text-align: center;
    z-index: 100;
`;

export const WrapperEdit = styled.div`
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
`

export const LogOutBtn = styled.button`
    width: 125px;
    height: 43px;
    text-align: center;
    cursor: pointer;
    border: transparent;
    border-radius: 24px 44px;
    background-color: #8BAA36;
    color: #fff;
`
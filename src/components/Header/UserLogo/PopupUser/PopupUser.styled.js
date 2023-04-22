import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';

export const OverlayDiv = styled.div`
    z-index: 1000;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
`
export const DivStyled = styled.div`
position: fixed;
top: 50px;
right: 50px;
    padding: 15px;
    border: 1px solid #8BAA36;
    border-radius: 18px;
    width: 161px;
    height: 130px;
    text-align: center;
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
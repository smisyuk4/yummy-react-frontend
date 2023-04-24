import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';
import { Link } from 'react-router-dom';


export const OverlayDiv = styled.div`
    display: block;
    position: absolute;
    top: 72px;
    right: 60px;
    width: 160px;
    height: 130px;
    background-color: ${props => props.theme.colors.buttonLightBG};
    padding: 25px 15px 15px;
    /* display: flex;
    justify-content: center;
    align-items: center;
     */
    transform: translateY(150px);
    transition: transform 2s ease-in-out;
    z-index: 999;

    &:hover {
        transform: translateY(-50px);
    }
`
export const ModalDiv = styled.div`
     max-width: 50%;
    border-radius: 10px;
    position: relative;
    top: 0;
    right: 0;
    
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
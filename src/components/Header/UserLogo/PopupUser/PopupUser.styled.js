import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';


export const OverlayDiv = styled.div`
    ${flexBox};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    padding: 18px;
    top: 72px;
    right: 60px;
    width: 160px;
    height: 130px;
    background-color: ${props => props.theme.colors.buttonLightBG};
    border: 1px solid #8BAA36;
    border-radius: 8px;

    transform: translateY(-300px);
    transition: transform 1s ease-in;
    z-index: 999;

    &.open {
        transform: translateY(60px);
    }
    &.close {
        transform: translateY(-300px);
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
width: 100%;
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
    
`

export const LogOutBtn = styled.button`

    width: 125px;
    width: 100%;
    height: 43px;
    text-align: center;
    cursor: pointer;
    border: transparent;
    border-radius: 24px 44px;
    background-color: #8BAA36;
    color: #fff;
`
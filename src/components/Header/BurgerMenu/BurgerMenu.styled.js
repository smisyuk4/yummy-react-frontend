import styled from '@emotion/styled';
import bgImgS from 'images/headerImges/burger-bg-s.png'
import bgImgM from 'images/headerImges/burger-bg-m.png'
import {flexBox} from 'styles/mixins';

export const BurgerMenuDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 0;
   
    background: rgb(235,243,212) url(${bgImgS}) no-repeat right bottom;

    @media ${props => props.theme.media.tablet} {
        background: rgb(235,243,212) url(${bgImgM}) no-repeat right bottom;
    }
    @media ${props => props.theme.media.desktop} {
        background: transparent;
    }
`;
export const ModalDiv = styled.div`
    max-width: 100%;
    position: relative;
`;
export const BtnCloseModal = styled.button`
    width: 32px;
    height: 32px;
    position: fixed;
    top: 32px;
    right: 16px;
    font-size: 16px;
    cursor: pointer;
`

export const BurgerNavigationNav = styled.nav`
    display: none;
    ${flexBox};
    flex-direction: column;
    row-gap: 32px;

    @media ${props => props.theme.media.desktop} {
        display: none;
    }
`;


import styled from '@emotion/styled';
import bgImgS from 'images/headerImges/burger-bg-s.png'
import bgImgM from 'images/headerImges/burger-bg-m.png'
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';

export const BurgerMenuDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 0;
   z-index: 90;
    background: rgb(235,243,212) url(${bgImgS}) no-repeat right bottom;

    @media ${props => props.theme.media.tablet} {
        background: rgb(235,243,212) url(${bgImgM}) no-repeat right bottom;
    }
    @media ${props => props.theme.media.desktop} {
        background: transparent;
    }
`;
export const ModalDiv = styled.div`
    padding: 18px 16px;
    max-width: 100%;
    position: relative;
`;

export const HeaderLogoDiv = styled.div`
    ${flexBox};
    justify-content: space-between;
    align-items: center;
`

export const BtnCloseModal = styled.button`
    display: block;
    border: none;
    cursor: pointer;
    background-color: transparent;
`
export const CloseIcon = styled(Icon)`
    width: 32px;
    height: 32px;
    stroke: #23262A;
    background-color: transparent;

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


import styled from '@emotion/styled';
import bgImgS from 'images/headerImges/burger-bg-s.png'
import bgImgM from 'images/headerImges/burger-bg-m.png'

export const BurgerMenuDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
   
    background: url(${bgImgS}) rgb(235,243,212);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${props => props.theme.media.desktop} {
        background: url(${bgImgM}) rgb(235,243,212);
    }
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
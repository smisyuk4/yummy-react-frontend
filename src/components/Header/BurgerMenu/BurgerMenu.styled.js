import styled from '@emotion/styled';
import bgImgS from 'images/headerImges/burger-bg-s.png'
// import bgImgM from 'images/headerImges/burger-bg-m.png'

export const BurgerMenuDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background: url(${bgImgS});
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
import styled from '@emotion/styled';

export const BurgerMenuDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    background-image: linear-gradient(150deg, #FFA500, #5B42F3 50%, #d6d3c9);
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
import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
background-color: transparent; 
border-radius: 24px 44px; 
border: 1px solid green;
width: 195px;
height: 46px;
position: absolute;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
border: 2px solid ${({theme}) => theme.colors.primary};
color: ${({theme}) => theme.colors.buttonDarkBG};
background: ${({theme}) => theme.colors.buttonLightBG};
`;
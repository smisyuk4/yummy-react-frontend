import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SearchStyled = styled.header`
    position: relative;
    top: -462px;
    left: -5px;
    z-index: 6;
`;

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;

`;

export const Input = styled(Field)`
  background: #FFFFFF;
  border-radius: 24px 44px; 
  border: 1px solid #F0F0F0;
  width: 295px;
  height: 52px;
  padding-y: 17px;
  padding-left: 32px;
  position: absolute;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #BDBDBD;
  &:focus {
    border-color: #F0F0F0;
    outline: none;
  }
`;

export const SearchFormBtn = styled.button`
background-color: transparent; 
border-radius: 24px 44px; 
border: 1px solid green;
width: 113px;
height: 52px;
position: absolute;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FAFAFA;
background: #22252A;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

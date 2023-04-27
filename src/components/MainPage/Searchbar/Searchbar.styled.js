import styled from '@emotion/styled';
import { Field, Form } from 'formik';
// import { NavLink } from 'react-router-dom';

export const SearchStyled = styled.div`
	position: relative;
	top: -139px;
	left: -22px;
	transform: translate(7px, -7px);
	z-index: 6;
	@media screen and (min-width: 768px) {
		top: -667px;
		left: -355px;
	}
	@media screen and (min-width: 1440px) {
		top: -895px;
		left: -825px;
	}
`;

export const SearchForm = styled(Form)`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	width: 100%;
`;

export const Input = styled(Field)`
	background: ${({ theme }) => theme.colors.addRecipeFormFieldsDropdownBackground};
	border-radius: 24px 44px;
	border: 1px solid #f0f0f0;
	width: 295px;
	height: 52px;

	padding-left: 32px;
	position: relative;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #bdbdbd;
	&:focus {
		border-color: #f0f0f0;
		outline: none;
	}
	@media screen and (min-width: 768px) {
		width: 342px;
		height: 59px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 16px;
		line-height: 24px;
		width: 483px;
		height: 71px;
	}
`;

export const SearchFormBtn = styled.button`
	top: 2px;
	right: 0;
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
	color: ${({ theme }) => theme.colors.fontColor};
	background: ${({ theme }) => theme.colors.buttonDarkBG};
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&:hover {
        background: ${({ theme }) => theme.colors.buttonPrimaryBG};
		border-color: ${({ theme }) => theme.colors.buttonPrimaryBG};
    }
	@media screen and (min-width: 768px) {
		width: 161px;
		height: 59px;
		top: 2px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 16px;
		line-height: 24px;
		height: 70px;
	}
`;

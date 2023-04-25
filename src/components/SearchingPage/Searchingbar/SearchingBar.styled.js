import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SearchStyled = styled.div`
	margin-top: 50px;
`;

export const SearchForm = styled(Form)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.position {
		position: relative;
	}
`;

export const Input = styled(Field)`
	background: ${({ theme }) => theme.colors.BGCintoButton};
	border-radius: 24px 44px;
	border: 1px solid ${({ theme }) => theme.colors.borderColorLight};
	width: 260px;
	height: 52px;
	padding-left: 32px;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: ${({ theme }) => theme.colors.fontColorDark};
	&:focus {
		border-color: ${({ theme }) => theme.colors.borderColorLight};
		outline: none;
	}
`;

export const SearchFormBtn = styled.button`
	background-color: transparent;
	border-radius: 24px 44px;
	color: ${({ theme }) => theme.colors.buttonLightBG};
	background: ${({ theme }) => theme.colors.buttonPrimaryBG};
	border: 1px solid white;
	width: 113px;
	height: 52px;

	position: absolute;
	right: 0;
	top: 2px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
`;

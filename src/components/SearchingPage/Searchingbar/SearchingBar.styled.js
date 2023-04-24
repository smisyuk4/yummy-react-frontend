import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SearchStyled = styled.div`
	margin-top: 50px;
	/* transform: translate(7px, -7px); */
	/* margin-right: calc((100% - 295px - 32px -34px) / 2); */
`;

export const SearchForm = styled(Form)`
	/* display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: end; */
	/* width: 295px; */
	/* margin-right: calc((100% - 295px - 32px -34px) / 2); */
`;

export const Input = styled(Field)`
	/* position: relative; */
	/* background: #ffffff; */
	background: aqua;
	border-radius: 24px 44px;
	border: 1px solid #f0f0f0;
	width: 260px;
	height: 52px;
	margin-left: calc((100% - 260px - 32px) / 2);
	padding-left: 32px;
	/* position: absolute; */
	/* font-family: 'Poppins';
	font-style: normal; */
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: #bdbdbd;
	&:focus {
		border-color: #f0f0f0;
		outline: none;
	}
`;

export const SearchFormBtn = styled.button`
	background-color: transparent;
	border-radius: 24px 44px;
	border: 1px solid green;
	width: 113px;
	height: 52px;
	/* position: absolute; */
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: #fafafa;
	background: #22252a;
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

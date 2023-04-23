import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { Icon } from 'components/Icon';
import { NavLink } from 'react-router-dom';

export const DivStyled = styled.div`
	@media screen and (min-width: 1440px) {
		position: absolute;
		top: 122px;
		right: 180px;
	}
`;

export const H1Styled = styled.h1`
	margin: 0;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.fontColor};
	font-feature-settings: 'liga' off;
`;

export const FormStyled = styled(Form)`
	background: ${({ theme }) => theme.colors.darkBG};
	box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	display: flex;
	max-width: 500px;
	flex-direction: column;
	padding: 32px 28px 40px;
	margin: 20px;
	position: relative;
	z-index: 1;
	@media screen and (min-width: 600px) {
		width: 500px;
		margin: 20px auto;
	}
`;

export const LabelStyled = styled.label`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 6px 0;
`;

export const InputForm = styled(Field)`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.fontColor};
	color: ${({ theme }) => theme.colors.fontColor};
	padding: 12px;
	padding-left: 40px;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	border-radius: 6px;
	box-sizing: border-box;
	background-color: transparent;
	opacity: 0.8;
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.fontColor};
		border-color: ${({ theme }) => theme.colors.fontColor};
	}
	&:hover {
		border: 1px solid #ffffff;
		outline: 1px solid ${({ theme }) => theme.colors.fontColor};
		color: #ffffff;
		opacity: 1;
	}
	.error & {
		border: 1px solid #e74a3b;
		outline: none;
	}
	.valid & {
		border: 1px solid #3cbc81;
		outline: none;
	}
`;

export const InputError = styled.span`
	color: #e74a3b;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
`;

export const IconStyled = styled(Icon)`
	position: absolute;
	stroke: ${({ theme }) => theme.colors.fontColor};
	width: 18px;
	height: 18px;
	top: 14px;
	left: 14px;
	.error & {
		stroke: #e74a3b;
	}
	.valid & {
		stroke: #3cbc81;
	}
`;

export const IconStatusStyled = styled(IconStyled)`
	right: 14px;
	left: unset;
	stroke: none;
	.error & {
		fill: #e74a3b;
	}
	.valid & {
		fill: #3cbc81;
	}
`;

export const NavLinkStyled = styled(NavLink)`
	color: ${({ theme }) => theme.colors.fontColor};
	text-align: center;
	display: block;
`;

import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { Icon } from 'components/Icon';
import {flexBox} from 'styles/mixins';
import { FormButton } from 'components/ButtonNav/ButtonNav.styled';
import { ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
    width: 204px;
    ${flexBox};
    flex-direction: column;
    column-gap: 8px;
	background: transparent;
    padding: 0px;
	/* @media screen and (min-width: 600px) {
		width: 500px;
		margin: 20px auto;
	} */
`;

export const LabelStyled = styled.label`
    display: flex;
	flex-direction: column;
    position: relative;

`;

export const InputForm = styled(Field)`
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    padding-left: 42px;
    background-color: transparent;
    border: 1.2px solid rgba(250, 250, 250, 0.16);
    border-radius: 6px;

    &::placeholder {
        font-size: 10px;
        line-height: 1,5;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.fontColor};
    }

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
	@media screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 27px;
	}
`;

export const InputError = styled.span`
	font-size: 10px;
    line-height: 1,5;
	letter-spacing: -0.02em;
    color: #e74a3b;
`;

export const IconStyled = styled(Icon)`
	position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    stroke: ${({ theme }) => theme.colors.fontColor};
	width: 16px;
	height: 12px;

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

export const BtnSybscribe = styled(FormButton)`
    width: 100%;
	margin-top: 8px;
    font-size: 14px;
	line-height: 1.14px;
`

export const ErrorSpan = styled(ErrorMessage)`
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
`
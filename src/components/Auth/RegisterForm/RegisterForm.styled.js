import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const H1Styled = styled.h1`
	margin: 0;
	margin-bottom: 20px;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -0.02em;
	color: #fafafa;
	font-feature-settings: 'liga' off;
`;

export const FormStyled = styled(Form)`
	background: #2a2c36;
	box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	padding: 32px 28px 40px;
	margin: 20px;
	position: relative;
	z-index: 1;
`;

export const LabelForm = styled.label`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 6px 0;
`;

export const InputForm = styled(Field)`
	width: 100%;
	border: 1px solid #fafafa;
	color: #fafafa;
	padding: 12px;
	padding-left: 40px;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	border-radius: 6px;
	box-sizing: border-box;
	background-color: transparent;
	opacity: 0.8;
`;

export const InputError = styled.span``;

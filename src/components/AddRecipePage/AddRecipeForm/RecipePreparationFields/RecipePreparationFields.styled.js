import styled from '@emotion/styled';
import { Field } from 'formik';



export const PreparationFieldSet = styled.fieldset`
	border: 0;
	z-index: 100;
`;

export const PreparationHeading = styled.h2`
	margin-bottom: 24px;
	line-height: 1;
	font-size: 24px;
	font-weight: 600;
	@media ${props => props.theme.media.tablet} {
		margin-bottom: 32px;
        margin-top: 0;
	}
	@media ${props => props.theme.media.desktop} {
		margin-bottom: 32px;
        margin-top: 0;
	}
`;

export const PreparationTextArea = styled(Field)`
	width: 343px;
	height: 154px;
	resize: none;
	padding: 10px 16px;

	background-color: ${p => p.theme.colors.addRecipeFormFieldsBackground};
	border: none;
	margin-bottom: 18px;
	box-sizing: border-box;
	@media ${props => props.theme.media.tablet} {
		width: 343px;
		height: 154px;
		padding: 16px 22px;
		margin-bottom: 32px;
	}
	@media ${props => props.theme.media.desktop} {
		width: 505px;
		height: 224px;
		padding: 16px 22px;
		margin-bottom: 32px;
	}
	::placeholder,
	::-webkit-input-placeholder {
		font-size: 14px;
		line-height: 1.5;
		color: ${p => p.theme.colors.addRecipeFormPlaceholder};
	}
	:-ms-input-placeholder {
		font-size: 14px;
		line-height: 1.5;
		color: ${p => p.theme.colors.addRecipeFormPlaceholder};
	}
`;
export const EmptyFieldNotation = styled.span`
	font-size: 24px;
	color: red;
	`
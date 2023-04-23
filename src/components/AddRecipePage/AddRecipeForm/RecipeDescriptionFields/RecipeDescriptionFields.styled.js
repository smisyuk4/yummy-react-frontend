import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const DescriptionDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const DescrForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 343px;
	padding: 10px;
	background-color: white;
	@media ${props => props.theme.media.tablet} {
		flex-direction: row;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 343px;
`;

export const LabelForm = styled.label`
	width: 100%;
	border-bottom: 1px;
	border-color: #e0e0e0;
	margin-top: 24px;
`;

export const LabelSelect = styled.label`
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	margin-top: 24px;
	letter-spacing: -0.02em;

	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 100%;
	}
`;

export const InputForm = styled(Field)`
	width: 100%;
	height: 40px;

	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	margin-top: 24px;
	letter-spacing: -0.02em;

	color: #000000;

	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 100%;
	}
	border: none;
	border-color: #e0e0e0;
	border-bottom-width: 1px;
`;

export const LabelFile = styled.label`
	margin-bottom: 32px;
`;

export const InputFile = styled(Field)`
	width: 100%;
	height: 100%;
	opacity: 0;
`;

export const InputSelct = styled(Field)`
	border: none;
	&: after;
`;

export const OverlayPicture = styled.div`
	position: relative;
	width: 279px;
	height: 268px;
	border-radius: 8px;
	background-color: ${props => props.theme.colors.buttonPrimaryBG};
`;
export const ThumbImege = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: absolute;
	border-radius: 8px;
	top: 0;
	left: 0;
`;

export const RecipeImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`;

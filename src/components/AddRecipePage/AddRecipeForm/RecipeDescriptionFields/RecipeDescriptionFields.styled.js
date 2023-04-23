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
	width: 400px;
	padding: 10px;
	background-color: white;
	@media ${props => props.theme.media.tablet} {
		flex-direction: row;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelForm = styled.label`
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;

	letter-spacing: -0.02em;

	color: #000000;

	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 100%;
	}
`;

export const InputForm = styled(Field)`
	width: 100%;
	font-size: 18px;
`;

export const InputFile = styled(Field)`
	width: 100%;
	height: 100%;
`;

export const OverlayPicture = styled.div`
	position: relative;
	width: 279px;
	height: 268px;
	border-radius: 8px;
	background-color: ${props => props.theme.colors.buttonPrimaryBG};
`;
export const ThumbImege = styled.div`
	display: block;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export const RecipeImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	object-position: center;
`;

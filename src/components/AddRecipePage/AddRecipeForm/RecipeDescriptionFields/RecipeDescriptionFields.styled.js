import styled from '@emotion/styled';
import { Form, Field } from 'formik';

// export const DescriptionDiv = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

export const DescrForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 10px;
	@media ${props => props.theme.media.tablet} {
		flex-direction: row;
		padding: 0;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 343px;
	gap: 24px;
	@media ${props => props.theme.media.tablet} {
		width: 393px;
		margin-left: 32px;
		gap: 32px;
	}
	@media ${props => props.theme.media.desktop} {
		margin-left: 50px;
	}
`;

export const LabelForm = styled.label`
	width: 100%;
	padding-bottom: 18px;
	border-bottom: 1px solid #e0e0e0;
`;

export const LabelSelect = styled.label`
	position: relative;
	display: flex;
	justify-content: space-between;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	border-bottom: 1px solid #e0e0e0;
	padding-bottom: 18px;
	color: rgba(0, 0, 1, 0.5);
	@media ${props => props.theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
	}
`;

export const InputForm = styled(Field)`
	width: 100%;

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	border: none;
	background-color: inherit;
	color: #000000;

	@media ${props => props.theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
	}
`;

export const LabelFile = styled.label``;

export const InputFile = styled(Field)`
	width: 100%;
	height: 100%;
	opacity: 0;
`;

export const InputSelct = styled(Field)`
	border: solid 1px #e0e0e0;
	background-color: ${props => props.theme.colors.lightBG};
	z-index: 3;
	padding-left: 10px;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: -0.02em;
`;

export const OverlayPicture = styled.div`
	position: relative;
	width: 279px;
	height: 268px;
	border-radius: 8px;
	margin-bottom: 32px;
	background-color: ${props => props.theme.colors.primary};
	@media ${props => props.theme.media.desktop} {
		margin-bottom: 0;
	}
	@media ${props => props.theme.media.desktop} {
		width: 357px;
		height: 344px;
	}
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

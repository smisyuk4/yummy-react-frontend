import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { Form, Field } from 'formik';

export const DescrForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 10px;
	margin-bottom: 67px;
	@media ${props => props.theme.media.tablet} {
		flex-direction: row;
		padding: 0;
		margin-bottom: 100px;
	}
	@media ${props => props.theme.media.desktop} {
		margin-bottom: 110px;
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

	border-bottom: 1px solid #e0e0e0;
	height: 40px;
	@media ${props => props.theme.media.tablet} {
		height: 43px;
	}
`;

export const LabelSelect = styled.label`
	position: relative;
	display: flex;
	justify-content: space-between;
	height: 40px;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	border-bottom: 1px solid #e0e0e0;
	color: #868686;
	@media ${props => props.theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
		height: 43px;
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
	outline: none;
	border: none;
	background-color: transparent;
	color: ${props => props.theme.colors.colorInput};

	@media ${props => props.theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
	}
	&:placeholder {
		color: ${props => props.theme.colors.placeHolderColor};
	}
	&:focus {
		border: none;
		outline: none;
	}
	&:hover {
		outline: none;
		border: none;
	}
`;

export const LabelFile = styled.label``;

export const InputFile = styled(Field)`
	width: 100%;
	height: 100%;
	opacity: 0;
`;

export const InputSelct = styled(Field)`
	border: none;
	margin-bottom: 18px;
	background-color: ${props => props.theme.colors.lightBG};
	z-index: 3;
	padding-left: 10px;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: -0.02em;
	cursor: pointer;
	text-align: end;
	padding-right: 28px;
	color: ${props => props.theme.colors.placeHolderColor};
`;

export const OverlayPicture = styled.div`
	position: relative;
	width: 279px;
	height: 268px;
	border-radius: 8px;
	margin-bottom: 32px;
	background-color: ${props => props.theme.colors.primary};
	@media ${props => props.theme.media.tablet} {
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

export const Test = styled.div`
	display: flex;
	flex-direction: column;
	width: 162px;
	position: relative;
`;

export const DropdownContainer = styled.div`
	border-radius: 0 0 6px 6px;
	background-color: transparent;
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;
	top: 35px;
	right: 0;
	height: 162px;
	overflow: scroll;
	overflow-x: hidden; /* Hide horizontal scrollbar */
	z-index: 10;
	padding: 8px 14px;
	box-sizing: border-box;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: -0.02em;
	cursor: pointer;
	color: ${props => props.theme.colors.placeHolderColor};
	background-color: ${({ theme }) => theme.colors.addRecipeDropDownBg};
	@media ${props => props.theme.media.tablet} {
		padding: 8px 18px;
	}
`;

export const SelectIcon = styled(Icon)`
	stroke: ${p => p.theme.colors.addRecipeFormFieldsDropdownButtonIcon};
`;

export const OverlaySelectIcon = styled.span`
	position: absolute;
	z-index: 5;
	right: 0;
	top: 5px;
	cursor: pointer;
`;

export const OptionsUl = styled.ul``;
export const SelectItem = styled.li`
	color: ${p => p.theme.colors.addRecipeFormFieldsDropdownListPosition};
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: -0.02em;
	&:hover {
		color: ${p => p.theme.colors.addRecipeFormFieldsDeleteButton};
	}
	&:focus {
		color: ${p => p.theme.colors.addRecipeFormFieldsDeleteButton};

	@media ${props => props.theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
		width: 100%;
		height: 43px;
	}`;

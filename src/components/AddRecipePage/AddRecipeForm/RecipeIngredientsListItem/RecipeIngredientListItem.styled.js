import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { Field } from 'formik';

export const StyledIngredientInput = styled(Field)`
	width: 194px;
	font-size: 14px;
	font-style: normal;
	line-height: 1.5;
	background-color: ${props =>
		props.theme.colors.addRecipeFormFieldsBackground};
	color: ${props => props.theme.colors.colorInput};
	border: ${props => props.theme.colors.addRecipeFormFieldsBorder};

	outline: none;
	padding: 16px;
	box-sizing: border-box;
	border-radius: 6px;
	@media ${props => props.theme.media.tablet} {
		width: 398px;
		font-size: 18px;
	}
	@media ${props => props.theme.media.desktop} {
		width: 398px;
		font-size: 18px;
	}
`;

export const StyledMeasureValueInput = styled(Field)`
	width: 42px;
	font-size: 14px;
	font-style: normal;
	line-height: 1.5;
	background-color: ${props =>
		props.theme.colors.addRecipeFormFieldsBackground};
	color: ${props => props.theme.colors.colorInput};
	border: ${props => props.theme.colors.addRecipeFormFieldsBorder};
	border-right: none;

	outline: none;
	padding: 16px 0 16px 12px;
	border-radius: 6px 0 0 6px;
	box-sizing: border-box;
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 56px;
	}
	@media ${props => props.theme.media.desktop} {
		font-size: 18px;
		width: 56px;
	}
`;

export const StyledMeasureInput = styled(Field)`
	width: 42px;
	font-size: 14px;
	font-style: normal;
	line-height: 1.5;
	background-color: ${props =>
		props.theme.colors.addRecipeFormFieldsBackground};
	color: ${props => props.theme.colors.colorInput};
	border: ${props => props.theme.colors.addRecipeFormFieldsBorder};
	border-left: none;

	outline: none;
	padding: 16px 0px 16px 0;
	border-radius: 0 6px 6px 0;
	box-sizing: border-box;
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 44px;
	}
	@media ${props => props.theme.media.desktop} {
		font-size: 18px;
		width: 44px;
	}
`;

export const StyledIngredientLabel = styled.label`
	position: relative;
	display: inline-block;
	margin-right: 14px;
	@media ${props => props.theme.media.tablet} {
		margin-right: 32px;
	}
	@media ${props => props.theme.media.desktop} {
		margin-right: 32px;
	}
`;

export const StyledMeasureLabel = styled.label`
	position: relative;
	display: inline-block;
	margin-right: 33px;
	@media ${props => props.theme.media.tablet} {
		margin-right: 154px;
	}
	@media ${props => props.theme.media.desktop} {
		margin-right: 64px;
	}
`;

export const StyledHelpListShowButton = styled.button`
	position: absolute;
	z-index: 1;
	top: 22px;
	right: 5px;
	background-color: transparent;
	border: none;
`;

export const StyledCloseButton = styled.button`
	border: none;
	background-color: transparent;
	padding: 0;
`;

export const DropdownMeasureContainer = styled.div`
	border-radius: 0 0 6px 6px;

	background-color: ${props =>
		props.theme.colors.bgColorListSelectIngredient};
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;

	height: 128px;
	width: 100%;

	overflow: scroll;
	overflow-x: hidden;
	z-index: 100;

	padding: 16px 35px;
	box-sizing: border-box;
`;

export const DropdownIngredientContainer = styled.div`
	border-radius: 0 0 6px 6px;
	background-color: ${props =>
		props.theme.colors.bgColorListSelectIngredient};
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;
	height: 128px;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden; /* Hide horizontal scrollbar */
	z-index: 100;
	padding: 8px 18px;
	box-sizing: border-box;
`;

export const DropdownIngredientUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 0;
	background-color: ${props => props.theme.colors.addRecipeDropDownBg};
`;

export const DropdownHideButton = styled.button`
	position: absolute;
	top: 13px;
	right: 5px;

	border: 0;
	background-color: transparent;
`;

export const DropdownListPosition = styled.button`
	border: none;
	background-color: transparent;
	border-color: transparent;
	color: ${p => p.theme.colors.addRecipeFormFieldsDropdownListPosition};
	font-weight: 400;
	font-size: 12px;
	line-height: 1.5;
	&:hover {
		color: ${p => p.theme.colors.addRecipeFormFieldsDropdownListHover};
	}
	&:focus {
		color: ${p => p.theme.colors.addRecipeFormFieldsDropdownListHover};
	}
	@media ${props => props.theme.media.tablet} {
		font-size: 14px;
	}
	@media ${props => props.theme.media.desktop} {
		font-size: 14px;
	}
`;

export const DropdownButtonIcon = styled(Icon)`
	cursor: pointer;
	stroke: ${p => p.theme.colors.addRecipeFormFieldsDropdownButtonIcon};
`;

export const ListItemDeleteIcon = styled(Icon)`
	stroke: ${props => props.theme.colors.addRecipeFormFieldsDeleteButton};
	cursor: pointer;

	&:hover {
		stroke: ${props => props.theme.colors.addRecipeFormFieldsDelBtnHover};
	}
`;

export const IngredientsListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	background-color: transparent;
`;

export const EmptyFieldNotation = styled.span`
	font-size: 36px;
	color: red;
	position: absolute;
	top: 14px;
	right: 35px;

	@media ${props => props.theme.media.tablet} {
		top: 14px;
		right: 140px;
	}
	@media ${props => props.theme.media.desktop} {
		top: 14px;
		right: 60px;
	}
`;

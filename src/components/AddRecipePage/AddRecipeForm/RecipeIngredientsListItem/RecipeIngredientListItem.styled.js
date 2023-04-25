import styled from '@emotion/styled';

export const StyledIngredientInput = styled.input`
	width: 194px;
	font-size: 18px;
	font-style: normal;
	line-height: 1.5;
	background-color: #d9d9d9;
	color: #23262a;
	border: none;
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

export const StyledMeasureInput = styled.input`
	width: 84px;
	font-size: 14px;
	font-style: normal;
	line-height: 1.5;
	background-color: #d9d9d9;
	color: #23262a;
	border: none;
	outline: none;
	padding: 16px 30px 16px 14px;
	border-radius: 6px;
	box-sizing: border-box;
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		width: 99px;
	}
	@media ${props => props.theme.media.desktop} {
		font-size: 18px;
		width: 99px;
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

	background-color: #ffffff;
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;

	height: 128px;
	width: 100%;

	overflow: hidden;
	z-index: 2;

	padding: 16px 35px;
	box-sizing: border-box;
`;

export const DropdownIngredientContainer = styled.div`
	border-radius: 0 0 6px 6px;
	background-color: #ffffff;
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;
	height: 128px;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden; /* Hide horizontal scrollbar */
	z-index: 2;
	padding: 8px 18px;
	box-sizing: border-box;
`;

export const DropdownIngredientUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 0;
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
	color: rgba(0, 0, 0, 0.5);
	font-weight: 400;
	font-size: 12px;
	line-height: 1.5;
	@media ${props => props.theme.media.tablet} {
		font-size: 14px;
	}
	@media ${props => props.theme.media.desktop} {
		font-size: 14px;
	}
`;

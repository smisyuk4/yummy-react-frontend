import styled from '@emotion/styled';

export const StyledIngredientInput = styled.input`
	width: 398px;
	font-size: 18px;
	font-style: normal;
	line-height: 1.5;
	background-color: #d9d9d9;
	color: #23262a;
	border: none;
	outline: none;
	padding: 18px 16px;
	box-sizing: border-box;
	border-radius: 6px;
`;

export const StyledMeasureInput = styled.input`
	width: 99px;
	font-size: 18px;
	font-style: normal;
	line-height: 1.5;
	background-color: #d9d9d9;
	color: #23262a;
	border: none;
	outline: none;
	padding: 18px 30px 18px 14px;
	border-radius: 6px;
	box-sizing: border-box;
`;

export const StyledIngredientLabel = styled.label`
	position: relative;
	display: inline-block;
	margin-right: 32px;
`;

export const StyledMeasureLabel = styled.label`
	position: relative;
	display: inline-block;
	margin-right: 64px;
`;

export const StyledHelpListShowButton = styled.button`
	position: absolute;
	z-index: 1;
	top: 27px;
	right: 15px;
	background-color: transparent;
	border: none;
`;

export const StyledCloseButton = styled.button`
    border: none;
    background-color: transparent;
`;

export const DropdownMeasureContainer = styled.div`
	border-radius: 0 0 6px 6px;
	
	background-color: #ffffff;
	box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
	position: absolute;
	
	height: 128px;
	width: 100%;
	
	overflow: scroll;
	overflow-x: hidden; /* Hide horizontal scrollbar */
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
`

export const DropdownHideButton = styled.ul`
    position: absolute;
    top: 13px;
    right: 15px;

    border: 0;
    background-color: transparent;
`

export const DropdownListPosition = styled.button`
    border: none;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
`
import styled from '@emotion/styled';
import { Icon } from 'components/Icon';


export const CounterContainer = styled.div`
	height: 32px;
	border-radius: 18px;
	background-color: transparent;
	border: 1px solid
		${props => props.theme.colors.addRecipeFormCounterButtons};
	display: flex;
	width: 71px;
	padding: 0 12px;
	justify-content: space-between;
	align-items: center;
	@media ${props => props.theme.media.tablet} {
		size: 81px;
	}
	@media ${props => props.theme.media.desktop} {
		size: 81px;
	}
`;

export const CounterButton = styled.div`
	border: none;
	background-color: transparent;
	padding: 0;
	margin: 0;
	stroke: ${props =>
		props.theme.colors.addRecipeFormCounterButtons};
	&:hover {
		stroke: ${props => props.theme.colors.addRecipeFormCounterButtonsHover};
	}

	&:focus {
		stroke: ${props => props.theme.colors.addRecipeFormCounterButtonsHover};
	}
`;

export const CounterValue = styled.span`
	font-weight: 400;
	size: 14px;
	line-height: 1.5;
	@media ${props => props.theme.media.tablet} {
		size: 16px;
	}
	@media ${props => props.theme.media.desktop} {
		size: 16px;
	}
`;

export const IconPlus = styled(Icon)`
	color: currentColor;
`;

export const IconMinus = styled(Icon)`
	color: currentColor;


`;



import styled from '@emotion/styled';

export const DivContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	padding: 10px;
	margin: 0 0 32px 0;
	@media ${props => props.theme.media.tablet} {
		padding: 20px;
	}
	@media ${props => props.theme.media.desktop} {
		padding: 21px 40px;
	}
`;

export const ListBar = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 664px;
	min-width: 339px;
`;
export const ItemBar = styled.li`
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.03em;
	color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-right: 24px;

	/* &:first-child {
		margin-right: 167px;
	}
	&:last-child {
		margin-right: 0;
	} */
	@media ${props => props.theme.media.tablet} {
		font-size: 18px;
		margin-right: 78px;

		/* &:first-child {
			margin-right: 318px;
		}
		&:last-child {
			margin-right: 0;
		} */
	}

	@media ${props => props.theme.media.desktop} {
		margin-right: 142px;

		/* &:first-child {
			margin-right: 750px;
		}
		&:last-child {
			margin-right: 0;
		} */
	}
`;

export const ShoppingList = styled.ul`
	display: block;
	padding: 0;
	margin: 0;
	margin-left: auto;
	margin-right: auto;
`;

export const SpanMeasure = styled.span`
	background-color: #8baa36;
	color: #fff;
	border-radius: 5px;
	margin-left: 41px;
	margin-right: 2px;
	padding: 4px 14px;
`;

export const ItemShoppingList = styled.li`
	outline: 1px red solid;
	display: flex;
	align-content: flex-start;
	flex-wrap: nowrap;
	align-items: center;
	border-bottom: 1px solid #e0e0e0;
	min-height: 84px;
	min-width: 343px;
	margin-bottom: 24px;

	/* &:last-child {
		margin-bottom: 0;
	} */
`;
export const CloseBtn = styled.button`
background-color: transparent;
border: none;
`




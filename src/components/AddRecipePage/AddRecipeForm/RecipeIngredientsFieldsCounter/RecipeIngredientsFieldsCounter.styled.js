import styled from "@emotion/styled";


export const CounterContainer = styled.div`
	height: 32px;
	border-radius: 18px;
	background-color: transparent;
	border: 1px solid rgba(51, 51, 51, 0.3);
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
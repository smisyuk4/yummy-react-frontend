import styled from "@emotion/styled";


export const CounterContainer = styled.div`
	height: 32px;
	border-radius: 18px;
	background-color: transparent;
	border: 1px solid rgba(51, 51, 51, 0.3);
	display: flex;
	width: 81px;
	padding: 0 12px;
	justify-content: space-between;
	align-items: center;
`;
export const CounterButton = styled.div`
    border: none;
    background-color: transparent;
`;

export const CounterValue = styled.span`
    font-weight: 400;
    size: 16px;
    line-height: 1.5;
`
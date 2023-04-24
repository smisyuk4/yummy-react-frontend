import styled from "@emotion/styled";

export const DivContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	padding: 10px;
	margin: 0 0 32px 0;
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
`;


export const ShoppingList = styled.ul`
display: block;
`

export const ItemShoppingList = styled.li`
outline: 1px red solid;
display: flex;
align-content: flex-start;
flex-wrap: nowrap;
align-items: center;
border-bottom: 1px solid #E0E0E0;
min-height: 84px;
min-width: 343px;
margin-bottom: 24px;

:last-child{
    margin-bottom: 0;
}`
// export const ImgContainer = styled.div`
// outline: red 1px solid;
// background: #EBF3D4;
// border-radius: 6px;
// hight: 60px;
// width: 60px;
// `
export const SpanMeasure = styled.span`
background-color: #8BAA36;
color: #fff;
border-radius: 5px;
margin-left: 41px;
margin-right: 2px;
padding: 1px 9px 1px 10px;`
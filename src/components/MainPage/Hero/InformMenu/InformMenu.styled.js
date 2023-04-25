import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const InformWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px;
	position: absolute;
	width: 225px;
	background-color: #fafafa;
	border-radius: 8px;
	top: 433px;
	left: 209px;
	z-index: 7;
	@media screen and (min-width: 768px) {
		width: 261px;
		padding: 12px;
		top: 390px;
		left: 452px;
	}
`;
export const TextfStyled = styled.p`
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: -0.24px;
	margin: 0;
	font-size: 14px;
	@media screen and (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BtnWrapperStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: flex-end;
	cursor: pointer;
`;

export const BtnTextStyled = styled.p`
	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: -0.24px;
	margin: 0;
`;

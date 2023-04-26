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
	top: 428px;
    left: 110px;
	z-index: 7;
	@media screen and (min-width: 768px) {
		width: 261px;
		padding: 12px;
		top: 432px;
		left: 452px;
	}
	@media screen and (min-width: 1440px) {
		width: 251px;
		padding: 16px;
		top: 510px;
		left: 1033px;
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
	@media screen and (min-width: 1440px) {
		font-size: 14px;
		line-height: 20px;
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

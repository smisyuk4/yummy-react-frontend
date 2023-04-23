import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DivStyled = styled.div`
	padding-bottom: 60px;
	overflow: clip;
	position: relative;
`;

export const NavLinkStyled = styled(NavLink)`
	color: ${({ theme }) => theme.colors.fontColor};
	text-align: center;
	display: block;
`;

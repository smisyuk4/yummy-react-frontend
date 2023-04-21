import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DivStyled = styled.div``;

export const NavLinkStyled = styled(NavLink)`
	color: ${({ theme }) => theme.colors.fontColor};
	text-align: center;
	display: block;
`;

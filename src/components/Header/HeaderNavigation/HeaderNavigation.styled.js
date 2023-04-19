import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderNavigationNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
`;

export const HeaderNavlink = styled(NavLink)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #23262A;

    text-decoration: none;
    
    &.active {
        color: #8BAA36
  }
`;

export const SearchImg = styled.img`
    width: 24px;
    height: 24px;
`
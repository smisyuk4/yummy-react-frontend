import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {flexBox} from 'styles/mixins';

export const HeaderNavigationNav = styled.nav`
    display: none;
    
    @media ${props => props.theme.media.desktop} {
        ${flexBox};
        flex-direction: row;
        column-gap: 30px;
    }
`;

export const HeaderNavlink = styled(NavLink)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    color: #23262A;
    font-family: 'Poppins', sans-serif;
   

    &.active {
        color: #8BAA36
  }
`;

export const SearchImg = styled.img`
    width: 24px;
    height: 24px;
`
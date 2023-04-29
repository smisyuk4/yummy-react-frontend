import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {flexBox} from 'styles/mixins';

export const HeaderNavigationNav = styled.nav`
    display: none;
    
    @media ${props => props.theme.media.desktop} {
        ${flexBox};
        flex-direction: row;
        column-gap: 30px;
        padding-right: 100px;
    }
`;

export const HeaderNavlink = styled(NavLink)`
    font-weight: 500;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.fontColorNavigation};;
   
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
    &.active {
        color: ${({ theme }) => theme.colors.primary};
  }
`;

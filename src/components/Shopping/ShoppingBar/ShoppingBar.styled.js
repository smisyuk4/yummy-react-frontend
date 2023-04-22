import styled from '@emotion/styled';
import { flexBox } from 'styles/mixins';

export const DivContainer = styled.div`
background-color: #8BAA36;
border-radius: 8px;
padding: 10px;
margin: 0 0 32px 0;
width: 100vw;
`

export const ListBar = styled.ul`
font-family: 'Poppins', sans-serif;;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1.5;
letter-spacing: 0.03em;
color: #FAFAFA;

padding: 0;
margin: 0;
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
    background-color: transparent;

`

export const ItemBar = styled.li`
s
`
// import {flexBox} from 'styles/mixins';

// export const HeaderNavigationNav = styled.nav`
//     display: none;
    
//     @media ${props => props.theme.media.desktop} {
//         ${flexBox};
//         flex-direction: row;
//         column-gap: 30px;
//     }
// `;

// export const HeaderNavlink = styled(NavLink)`
//     font-style: normal;
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 1.57;
//     color: #23262A;
//     font-family: 'Poppins', sans-serif;
   

//     &.active {
//         color: #8BAA36
//   }
// `;

// export const SearchImg = styled.img`
//     width: 24px;
//     height: 24px;
// `
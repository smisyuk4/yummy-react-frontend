import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/Icon';
import {flexBox} from 'styles/mixins';

export const FooterStyled = styled.footer`
    padding-top: 28px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors.buttonDarkBG};
    ${flexBox};
    flex-direction: column;
    gap: 32px;
`

export const WrapperTitle = styled.div`
    ${flexBox};
    gap: 8px;

`
export const IconDiv = styled.div`
    width: 32px;
    height: 32px;
    background: #EBF3D4;
    border-radius: 6px;
    padding: 7px;
    ${flexBox};
`
export const IconFooter = styled(Icon)`
    /* width: 22px;
    height: 22px; */
    stroke: ${({color}) => color};
`

export const Title = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 1.0;
letter-spacing: 0.015em;

color: ${props => props.theme.colors.fontColor};

`

export const FooterNav = styled.div`
    ${flexBox};
    flex-direction: column;
    gap: 14px;
`

export const FooterNavlink = styled(NavLink)`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.fontColor};
`;
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/Icon';
import {flexBox} from 'styles/mixins';

export const WrapperFooter = styled.footer`
    ${flexBox};
    flex-direction: column;
    text-align: center;

`
export const FooterStyled = styled.div`
    width: 100%;
    padding-top: 28px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors.buttonDarkBG};
    ${flexBox};
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 0px;
	}
    @media screen and (min-width: 1140px) {
        padding-left: 100px;
        padding-right: 100px;
	}
  
`
export const WrapperDiscr = styled.div`
        margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        margin: 0px;
        align-items: left;
	}
`
export const WrapDiscrSubscrForm = styled.div`
    @media screen and (min-width: 1140px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        gap: 200px;
}
`

export const FotterUpDiv = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: start;
        flex-direction: row;
        gap: 175px;
        margin-bottom: 72px;
	    }

    @media screen and (min-width: 1140px) {
        width: 66%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 120px;
	    }
`
export const WrapperTitle = styled.div`
    ${flexBox};
    gap: 8px;
    @media screen and (min-width: 768px) {
        justify-content: left;
        margin-bottom: 24px;
	}

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

export const FooterTeam = styled.div`
    width: 100%;
    ${flexBox};
    flex-direction: row;
    text-align: center;
    gap: 14px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${props => props.theme.colors.buttonDarkBG};
    opacity: 0.5;

`
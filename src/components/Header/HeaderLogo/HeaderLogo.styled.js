import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';

export const HeaderLogoStyled = styled(Link)`
    display: inline-block;
    width: 40px;
    height: 40px;

    @media (min-width: 480px) {
    width: 44px;
    height: 44px;
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

export const HeaderLogoDiv= styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    border-radius: 6px;
    padding: 7px;
    ${flexBox};
`
export const LogoHeader = styled(IconFooter)`
    width: 40px;
    height: 40px;
    color: ${props => props.theme.colors.primary};
`
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';

export const HeaderLogoStyled = styled(Link)`
    ${flexBox};
`
export const  HeaderLogoIcon= styled(Icon)`
    width: 40px;
    height: 40px;
    padding: 10px;
    stroke: #FAFAFA;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.primary};

    @media (min-width: 480px) {
        width: 44px;
        height: 44px;
  }
`
// export const IconFooter = styled(HeaderLogoIcon)`
//     stroke: ${({color}) => color};
// `



export const HeaderLogoDiv= styled.div`
    
`
export const IconDiv = styled.div`
    width: 32px;
    height: 32px;
    background: #EBF3D4;
    border-radius: 6px;
    padding: 7px;
    ${flexBox};
`

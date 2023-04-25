import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';


export const DivStyled = styled.div`
    ${flexBox};
`;

export const SonetLinksList = styled.ul`
    ${flexBox};
    width: 189px;
    height: 50px;
    padding: 16px 28px;
    border-radius: 6px;
    gap: 16px;
    &:hover {
        background: #8BAA36;
    }
    &:hover svg {
        fill: #FFFFFF;       
    }

    
`

export const SonetItem = styled.li`

`
export const SonetLink = styled(Link)`

`
export const IconSonetLink = styled(Icon)`
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.primary};
    &:hover  {
        fill: #FFFFFF;       
    }

`
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';


export const DivStyled = styled.div`
    ${flexBox};
`;

export const SonetLinksList = styled.ul`
    ${flexBox};
    padding: 0px;
    gap: 16px;
`

export const SonetItem = styled.li`

`
export const SonetLink = styled(Link)`

`
export const IconSonetLink = styled(Icon)`
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.primary};

`
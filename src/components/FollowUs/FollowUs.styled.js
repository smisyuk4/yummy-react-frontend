import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {flexBox} from 'styles/mixins';
import { Icon } from 'components/Icon';


export const DivStyled = styled.div`
    ${flexBox};
`;
export const SonetLinksList = styled.ul`
    ${flexBox};
    padding: 15px 28px;
    border-radius: 6px;
    /* background: ${({ theme }) => theme.colors.followUsBG}; */
    gap: 16px;
    /* &:hover {
        background: ${({ theme }) => theme.colors.followUsBGHover};
    } */
    & > a {
        padding: 0;
        margin: 0;
    }
`
export const SonetItem = styled.li`
`
export const SonetLink = styled(Link)`
`
export const IconSonetLink = styled(Icon)`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.followUsColor};
    &:hover  {
        fill: ${({ theme }) => theme.colors.followUsColorHover};       
    }

`
import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';

export const HeaderStyled = styled.header`
    min-width: 375px;
    max-width: 1440px;
    position: relative;
    z-index: 5;
    padding: 21px 16px;
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
    background-color: transparent;

    @media ${props => props.theme.media.tablet} {
       padding-left: 32px;
       padding-right: 32px;
    }
    @media ${props => props.theme.media.desktop} {
        padding-left: 100px;
        padding-right: 100px;
    }
`;
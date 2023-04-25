import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';

export const HeaderStyled = styled.header`
    min-width: 375px;
    max-width: 768px;
    position: relative;
    z-index: 5;
    padding: 21px 16px;
    ${flexBox};
    justify-content: space-between;
    flex-direction: row;
    background-color: transparent;
`;
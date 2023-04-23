import styled from '@emotion/styled';
import {flexBox} from 'styles/mixins';


export const UlStyled = styled.ul`
display: none;

@media screen and (min-width: 768px) {
        padding: 0px;
        margin: 0;
        display: block;
        list-style: inside;
		font-size: 18px;
		line-height: 27px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.29;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.fontColor};

        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 10px;
	}

`;

export const DescriptionItem = styled.li`

`
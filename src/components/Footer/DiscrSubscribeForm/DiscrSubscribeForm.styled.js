import styled from '@emotion/styled';

export const DivStyled = styled.div`
    display: none;

    @media screen and (min-width: 1140px) {
		display: inline-block;
        width: 340px;
        margin-bottom: 28px;
        text-align: left;
	}
`;

export const TitleFormSubscription = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: ${props => props.theme.colors.fontColor};

    margin-bottom: 14px;
`

export const SubscribeFormText = styled.p`
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.fontColor};
`
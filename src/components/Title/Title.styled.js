import styled from '@emotion/styled';

export const TitleDiv = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	width: 100%;

    @media ${props => props.theme.media.tablet} {
		padding-top: 72px;
	    padding-bottom: 100px;
	}
	@media ${props => props.theme.media.desktop} {
		padding-top: 100px;
	    padding-bottom: 100px;
`;

export const TitleH = styled.h1`
	font-size: 28px;
	line-height: 28px;
	letter-spacing: -0.02em;
	color: #001833;
`;

/* font-family: 'Poppins'; */
/* font-style: normal; */
/* font-weight: 600; */

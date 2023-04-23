import styled from '@emotion/styled';

export const Tegline = styled.h1`
	position: relative;
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 1;

	letter-spacing: -0.02em;
	font-feature-settings: 'liga' off;

	color: #001833;
	padding-left: 8px;
	margin: 50px 0 50px 0;
`
export const DivCenter = styled.div`
	z-index: -1;
	position: absolute;
	width: 6px;
	height: 6px;
	left: 247px;

	background: #22252a;
	border-radius: 3px;
	transform: rotate(-25deg);
	@media ${props => props.theme.media.tablet} {
    width: 12px;
    height: 12px;
    left: 437px;
    top: 160.07px;
}

@media ${props => props.theme.media.desktop} {
    left: 807px;
    top: 204.07px;
}
`

export const DivRight = styled.div`
	z-index: -1;
	position: absolute;
	width: 8px;
	height: 8px;
	left: 349px;
	top: 0;

	background: #8baa36;
	border-radius: 3px;
	transform: rotate(-25deg);

	@media ${props => props.theme.media.tablet} {
		width: 14px;
		height: 14px;
		left: 726px;
		top: 103.92px;
	}

	@media ${props => props.theme.media.desktop} {
		left: 1250px;
		top: 134.92px;
	}
`


export const DivLeft = styled.div`
	z-index: -1;
	position: absolute;
	width: 8px;
	height: 8px;
	left: 120px;
	top: -27.37px;

	background: #8baa36;
	border-radius: 3px;
	transform: rotate(-25deg);

	@media ${props => props.theme.media.tablet} {
		width: 14px;
		height: 14px;
		left: 219px;
		top: 90.92px;
	}
	
	@media ${props => props.theme.media.desktop} {
		left: 328px;
		top: 121.92px;
	}
`

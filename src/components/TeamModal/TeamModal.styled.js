import styled from '@emotion/styled';

export const DivStyled = styled.div`
	padding: 1rem;
`;

export const H1Styled = styled.h1`
	text-align: center;
	padding: 10px;
`;

export const H2Styled = styled.h2`
	text-align: center;
	padding: 3px;
	color: ${({ theme }) => theme.colors.buttonDarkBG};
	margin-top: 5px;
`;

export const H3Styled = styled.h3`
	text-align: center;
	padding: 3px;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const UlStyled = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;

export const LiStyled = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	margin: 5px;
	aspect-ratio: 1/1;
	@media (min-width: 600px) {
		width: calc(100vw / 2 - 10px);
	}
	@media (min-width: 900px) {
		width: calc(100vw / 3 - 10px);
	}
	@media (min-width: 1440px) {
		width: calc(100vw / 4 - 10px);
	}
	& img {
		border-radius: 6px;
		filter: blur(2px) brightness(0.8);
		transform: scale(1);
		object-fit: cover;
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
		@media (min-width: 600px) {
			height: calc(100vw / 2 - 10px);
		}
		@media (min-width: 900px) {
			height: calc(100vw / 3 - 10px);
		}
		@media (min-width: 1440px) {
			height: calc(100vw / 4 - 10px);
		}
	}
	&:hover img {
		filter: blur(0) brightness(1);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
		transform: scale(1.04);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
	}
`;

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
	@media (min-width: 600px) {
		max-width: calc(100% / 2 - 10px);
	}
	@media (min-width: 900px) {
		max-width: calc(100% / 3 - 10px);
	}
	@media (min-width: 1440px) {
		max-width: calc(100% / 4 - 10px);
	}
	& img {
		border-radius: 6px;
		filter: grayscale(1);
		transform: scale(1);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
	}
	&:hover img {
		filter: grayscale(0);
		transform: scale(1.04);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
	}
`;

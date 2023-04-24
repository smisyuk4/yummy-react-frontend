import styled from '@emotion/styled';

export const DivStyled = styled.div`
	background-color: ${({ theme }) => theme.colors.buttonLightBG};
	margin-top: 50px;
	margin-bottom: 100px;

	@media screen and (min-width: 768px) {
		margin-top: 72px;
	}
	@media screen and (min-width: 1440px) {
		margin-top: 100px;
		margin-bottom: 200px;
	}
`;

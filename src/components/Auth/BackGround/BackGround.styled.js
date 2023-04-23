import styled from '@emotion/styled';

export const DivStyled = styled.div`
	width: 100%;
	height: 100vh;
	background: #1e1f28;
	position: absolute;
	top: 322px;
	z-index: -1;
	clip-path: polygon(33% 6%, 61% 6%, 100% 0, 100% 100%, 0 100%, 0 0);
	@media (min-width: 768px) {
		top: 418px;
	}
	@media (min-width: 1440px) {
		top: 444px;
	}
`;

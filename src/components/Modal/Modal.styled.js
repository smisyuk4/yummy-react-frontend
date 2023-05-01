import styled from '@emotion/styled';

export const ModalDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	overflow: auto;
	z-index: 200;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.lightBG};
	padding: 50px;
	box-sizing: border-box;
`;

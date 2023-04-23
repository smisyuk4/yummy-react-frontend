import styled from '@emotion/styled';

export const DivContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	padding: 10px;
	margin: 0 0 32px 0;
`;

export const ListBar = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
    justify-content: space-between;
    max-width: 664px;
    min-width: 339px;
`;
export const ItemBar = styled.li`
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.03em;
	color: ${({ theme }) => theme.colors.buttonLightBG};
`;

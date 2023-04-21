import styled from '@emotion/styled';
import { useAuth } from 'hooks/useAuth';

export const DivStyled = styled.div`
	min-width: 375px;
	max-width: 2000px;
	padding: ${() => {
		const { isLoggedIn } = useAuth();
		return isLoggedIn ? '0 16px' : '0';
	}};
`;

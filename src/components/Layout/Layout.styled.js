import styled from '@emotion/styled';
import { useAuth } from 'hooks/useAuth';

export const DivStyled = styled.div`
	padding: ${() => {
		const { isLoggedIn } = useAuth();
		return isLoggedIn ? '0 16px' : '0';
	}};
`;

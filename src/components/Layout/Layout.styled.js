import styled from '@emotion/styled';
import { useAuth } from 'hooks/useAuth';

export const DivStyled = styled.div`
	/* min-width: 375px; */
	max-width: 2000px;
	margin: 0 auto;
	padding: ${() => {
		const { isLoggedIn } = useAuth();
		return isLoggedIn ? '0 16px' : '0';
	}};
	@media (min-width: 768px) {
		padding: ${() => {
			const { isLoggedIn } = useAuth();
			return isLoggedIn ? '0 32px' : '0';
		}};
	}
	@media (min-width: 1440px) {
		padding: ${() => {
			const { isLoggedIn } = useAuth();
			return isLoggedIn ? '0 100px' : '0';
		}};
	}
`;

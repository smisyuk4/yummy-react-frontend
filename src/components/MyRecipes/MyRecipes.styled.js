import styled from '@emotion/styled';
import { flexBox } from 'styles/mixins';

export const Container = styled.div`
	padding: 29px 0 100px 0;
	@media ${props => props.theme.media.tablet} {
		padding: 51px 0 200px 0;
	}
	@media ${props => props.theme.media.desktop} {
		padding-top: 79px;
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 50px;
	@media ${props => props.theme.media.tablet} {
		margin-bottom: 100px;
	}
`;

export const PaginationWrapper = styled.div`
	${flexBox};
	margin-top: 40px;

	@media ${props => props.theme.media.tablet} {
		margin-top: 50px;
	}
`;

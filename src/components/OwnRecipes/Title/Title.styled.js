import styled from '@emotion/styled';
import { TitleStyled } from 'components/ReusableComponentTitleWithJewelry/ReusableComponentTitleWithJewelry.styled';

export const Title = styled(TitleStyled)`
	margin: 29px 0 50px;
	@media screen and (min-width: 768px) {
		margin: 51px 0 100px;
	}
	@media screen and (min-width: 1440px) {
		margin: 79px 0 100px;
	}
`;

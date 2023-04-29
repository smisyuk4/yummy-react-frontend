import styled from '@emotion/styled';

export const SearchStyled = styled.div`
	margin-top: 50px;

	@media screen and (min-width: 768px) {
		margin-top: 40px;
	}
	@media screen and (min-width: 768px) {
		margin-top: 50px;
	}
`;

export const FormStyled = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.position {
		position: relative;
	}
`;

export const Input = styled.input`
	background: ${({ theme }) => theme.colors.bgTitleCard};
	border-radius: 24px 44px;
	border: 1px solid ${({ theme }) => theme.colors.borderColorLight};
	width: 260px;
	height: 52px;
	padding-left: 32px;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: ${({ theme }) => theme.colors.fontColorDark};
	&:focus {
		border-color: #61616170;
		outline: none;
	}

	@media screen and (min-width: 768px) {
		width: 327px;
		height: 54px;
		font-size: 14px;
		line-height: 21px;
	}
	@media screen and (min-width: 1440px) {
		width: 475px;
		height: 68px;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const SearchFormBtn = styled.button`
	background-color: transparent;
	border-radius: 24px 44px;
	color: ${({ theme }) => theme.colors.buttonLightBG};
	background: ${({ theme }) => theme.colors.primary};
	border: none;
	width: 113px;
	height: 100%;

	position: absolute;
	right: 0px;
	top: 0px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;

	&:hover,
	&:active {
		background: #1e1f28;
	}

	@media screen and (min-width: 768px) {
		width: 161px;
		height: 60px;
		font-size: 16px;
		line-height: 24px;
	}
	@media screen and (min-width: 1440px) {
		height: 70px;
	}
`;

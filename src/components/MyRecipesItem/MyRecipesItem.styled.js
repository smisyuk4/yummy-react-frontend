import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { NavLinkStyled } from 'components/ButtonNav/ButtonNav.styled';
import { NavLink } from 'react-router-dom';

export const RecipeItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 14px;
	padding: 14px 9px;

	background: ${props => props.theme.colors.recipeItemBackgroundColor};

	border-radius: 8px;

	@media ${props => props.theme.media.tablet} {
		gap: 24px;
		padding: 28px 24px;
	}

	@media ${props => props.theme.media.desktop} {
		gap: 54px;
		padding: 40px;
	}
`;

export const RecipeImgWrapper = styled.div`
	width: 124px;
	height: 124px;
	flex: 0 0 auto;

	border-radius: 8px;

	@media ${props => props.theme.media.tablet} {
		width: 228px;
		height: 232px;
	}

	@media ${props => props.theme.media.desktop} {
		width: 318px;
		height: 324px;
	}
`;

export const RecipeImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;

	border-radius: 8px;
`;

export const RecipeWrapper = styled.div`
	position: relative;
	height: 124px;
	width: 100%;

	@media ${props => props.theme.media.tablet} {
		height: 232px;
	}

	@media ${props => props.theme.media.desktop} {
		height: 324px;
	}
`;

export const RecipeTitle = styled.h2`
	margin-bottom: 14px;

	font-weight: 500;
	font-size: 14px;
	line-height: 100%;
	letter-spacing: -0.24px;

	padding-right: 27px;

	color: ${props => props.theme.colors.fontColorDark};

	@media ${props => props.theme.media.tablet} {
		margin-bottom: 28px;
		padding-right: 42px;
		font-size: 24px;
	}

	@media ${props => props.theme.media.desktop} {
		margin-bottom: 40px;
		padding-right: 47px;
	}
`;

export const DeleteButton = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	width: 24px;
	height: 24px;

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;

	background-color: ${props => props.theme.colors.buttonPrimaryBG};

	border-radius: 4px;
	border: none;

	cursor: pointer;

	&:hover,
	:focus {
		background-color: red;
	}

	@media ${props => props.theme.media.tablet} {
		width: 38px;
		height: 38px;
	}

	@media ${props => props.theme.media.desktop} {
		width: 44px;
		height: 44px;
	}
`;

export const DeleteIconStyled = styled(Icon)`
	width: 14px;
	height: 14px;

	stroke: ${props => props.theme.colors.deleteIconStroke};
	fill: none;

	@media ${props => props.theme.media.tablet} {
		width: 22px;
		height: 22px;
	}

	@media ${props => props.theme.media.desktop} {
		width: 24px;
		height: 24px;
	}
`;

export const RecipeAbout = styled.p`
	padding-right: 24px;

	font-size: 8px;
	line-height: 125%;
	letter-spacing: -0.02em;

	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	white-space: pre-wrap;

	color: ${props => props.theme.colors.recipeTextColor};

	@media ${props => props.theme.media.tablet} {
		padding-right: 51px;

		font-size: 14px;
		line-height: 129%;
		-webkit-line-clamp: 5;
	}

	@media ${props => props.theme.media.desktop} {
		padding-right: 123px;

		font-size: 14px;
		line-height: 133%;
		-webkit-line-clamp: 6;
	}
`;

export const RecipeTime = styled.p`
	position: absolute;
	left: 0;
	bottom: 0;

	font-weight: 500;
	font-size: 10px;
	line-height: 140%;
	letter-spacing: -0.24px;

	color: ${props => props.theme.colors.fontColorDark};

	@media ${props => props.theme.media.tablet} {
		font-size: 14px;
		line-height: 143%;
	}
`;

export const SeeRecipeBtn = styled(NavLinkStyled)`
	position: absolute;
	right: 0;
	bottom: 0;
	margin: 0;
	padding: 6px 14px;

	font-weight: 400;
	font-size: 10px;
	line-height: 100%;

	background-color: #8baa36;
	color: #fafafa;
	border-color: #8baa36;

	@media ${props => props.theme.media.tablet} {
		font-size: 14px;
		margin: 0;
		padding: 12px 32px;
		background-color: #8baa36;
		color: #fafafa;
		border-color: #8baa36;
	}

	@media ${props => props.theme.media.desktop} {
		margin: 0;
		padding: 18px 44px;
		font-size: 16px;
		background-color: #8baa36;
		color: #fafafa;
		border-color: #8baa36;
	}

	&:hover {
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
			border-color 0.3s ease-in-out;
		background-color: #22252a;
		border-color: #22252a;
	}
`;

export const LinkStyled = styled(NavLink)`
	text-decoration: none;
	color: ${props => props.theme.colors.fontColorDark};
	margin-top: 15px;
	display: inline-block;
	font-size: 8px;
	&:hover {
		text-decoration: underline;
	}

	@media ${props => props.theme.media.tablet} {
		font-size: 10px;
	}

	@media ${props => props.theme.media.desktop} {
		font-size: 14px;
	}
`;

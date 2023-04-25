import styled from '@emotion/styled';
import { flexBox } from 'styles/mixins';
import { Icon } from 'components/Icon';

export const FavoriteStyled = styled.div``;

export const FavoriteImgBox = styled.div``;

export const FavoriteList = styled.ul`
	margin: 0;
	padding: 0;
`;

export const FavoriteItem = styled.li`
	${flexBox}
	padding: 14px, 9px;
`;

export const FavoriteImg = styled.img`
	width: 124px;
	height: 124px;
	left: 9px;
	top: 14px;
	border-radius: 8px;
`;

export const FavoriteIcon = styled(Icon)`
	width: 11px;
	height: 12px;
`;

export const FavoriteRecipeBox = styled.div``;

export const FavoriteRecipeTitle = styled.h3`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1;

	color: #3e4462;
`;

export const FavoriteDeleteBtn = styled.button`
	width: 24px;
	height: 24px;
	left: 310px;
	top: 14px;
	background: #ebf3d4;
	border-radius: 4px;
	border: none;
`;

export const FavoriteArticle = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 8px;
	line-height: 1.25;
	color: #23262a;
`;

export const FavoriteTime = styled.p``;

export const FavoriteSeeBtn = styled.button``;

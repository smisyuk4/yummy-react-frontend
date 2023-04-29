import styled from '@emotion/styled';

export const DivStyled = styled.div`
	position: relative;
	box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
	border-radius: 26px;
	background-color: #fafafa;
	display: inline-flex;
	z-index: 100;
	/* width: 275px; */
	justify-content: space-around;
	align-items: center;

	& .pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
	}
	& .pagination li {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		line-height: 18px;
	}
	& .pagination li a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
		padding: 8px 16px;
		border-radius: 50%;
	}
	& .pagination li a:hover {
		color: #22252a;
		background-color: #ebf3d4;
	}
	& .pagination li.active a {
		color: #656565;
		background-color: #ebf3d4;
		/* width: 27px;
		height: 27px; */
		border-radius: 50%;
	}

	& li.previous {
		margin-right: 10px;
		color: #656565;
	}
	& li.next {
		margin-left: 10px;
		color: #656565;
	}
	& li.disabled {
		pointer-events: none;
	}
	& li.disabled a {
		cursor: default;
	}
`;

import styled from '@emotion/styled';

export const DivStyled = styled.div`
	position: relative;
	box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
	border-radius: 26px;
	background-color: #fafafa;
	display: inline-flex;
	margin-top: 20px;
	/* width: 275px; */

	z-index: 100;
	& .pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin: 20px 0; */

		padding: 0 10px;
	}
	& .pagination li {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		/* width: 27px;
		height: 27px; */
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
	}
	& .pagination li a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
		padding: 8px 15px;
		border-radius: 50%;
	}
	& .pagination li a:hover {
		color: #fff;
		background-color: #000;
	}
	& .pagination li.active a {
		color: red;
		background-color: #ebf3d4;
		width: 27px;
		height: 27px;
		border-radius: 50%;
	}

	& li.previous {
		margin-right: 10px;
	}
	& li.next {
		margin-left: 10px;
	}
	& li.disabled {
		pointer-events: none;
	}
	& li.disabled a {
		cursor: default;
	}
`;

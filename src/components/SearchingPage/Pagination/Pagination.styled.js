import styled from '@emotion/styled';

export const DivStyled = styled.div`
	& .pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px 0;
	}
	& .pagination li {
		list-style: none;
		margin: 0 5px;
	}
	& .pagination li a {
		text-decoration: none;
		color: #000;
		cursor: pointer;
	}
	& .pagination li a:hover {
		color: #fff;
		background-color: #000;
	}
	& .pagination li.active a {
		color: #fff;
		background-color: #000;
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

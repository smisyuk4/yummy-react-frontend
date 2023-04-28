
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { DivStyled } from './Pagination.styled';

export const Pagination = ({pagecount, onChange}) => {
	const [page, setPage] = useState(1);
	const handleChange = (event, page) => {
		setPage(event.selected + 1);
		onChange(event.selected + 1);
		console.log(page);
		console.log(event);
		console.log(event.selected + 1);
	};

	return (
		<DivStyled>
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				page={page}
				breakClassName={'break-me'}
				pageCount={pagecount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handleChange}
				containerClassName={'pagination'}
				activeClassName={'active'}
			/>
		</DivStyled>
	);
};

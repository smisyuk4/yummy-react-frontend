// import { DivStyled } from './Pagination.styled';

// import * as React from 'react';
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';
// import { Box, Pagination } from '@mui/material';

// // export function PaginationRounded() {
// //   return (
//     // <Stack spacing={2}>
//     //   <Pagination count={10} shape="rounded" />
//     //   <Pagination count={10} variant="outlined" shape="rounded" />
//     // </Stack>
// //     <Box justifyContent={'center'} alignItems={'center'} display={'flex'}>
// //       <Pagination
// //       count={6}
// //       />
// //     </Box>
// //   );
// // }
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { DivStyled } from './Pagination.styled';

export const PaginationControlled = () => {
	const [page, setPage] = useState(1);
	const handleChange = (event, page) => {
		setPage(page);
	};

	return (
		<DivStyled>
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				page={page}
				breakClassName={'break-me'}
				pageCount={6}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handleChange}
				containerClassName={'pagination'}
				activeClassName={'active'}
			/>
		</DivStyled>
	);
};

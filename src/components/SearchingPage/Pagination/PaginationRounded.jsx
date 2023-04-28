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
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
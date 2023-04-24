import { Formik } from 'formik';
import {
	SearchStyled,
	SearchForm,
	SearchFormBtn,
	Input,
} from './SearchingBar.styled';

export const SearchingBar = ({ onSubmit }) => {
	const handleSubmit = (values, actions) => {
		onSubmit(values);
		actions.resetForm();
	};

	return (
		<SearchStyled>
			<Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
				<SearchForm>
					<Input
						name="search"
						type="text"
						autoComplete="off"
						autoFocus
					/>
					<SearchFormBtn type="submit">
						<span>Search</span>
					</SearchFormBtn>
				</SearchForm>
			</Formik>
		</SearchStyled>
	);
};

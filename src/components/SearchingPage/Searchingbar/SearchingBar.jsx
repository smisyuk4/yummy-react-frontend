import { Formik } from 'formik';
import {
	SearchStyled,
	SearchForm,
	SearchFormBtn,
	Input,
} from './SearchingBar.styled';

export const SearchingBar = ({ changeValue }) => {
	const handleSubmit = (values, actions) => {
		changeValue(values);
		actions.resetForm();
	};

	return (
		<SearchStyled>
			<Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
				<SearchForm>
					<div className="position">
						<Input
							name="search"
							type="text"
							autoComplete="off"
							autoFocus
						/>
						<SearchFormBtn type="submit">
							<span>Search</span>
						</SearchFormBtn>
					</div>
				</SearchForm>
			</Formik>
		</SearchStyled>
	);
};

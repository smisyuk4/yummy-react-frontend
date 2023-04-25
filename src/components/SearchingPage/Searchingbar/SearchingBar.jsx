import { Formik } from 'formik';
import {
	SearchStyled,
	SearchForm,
	SearchFormBtn,
	Input,
} from './SearchingBar.styled';

export const SearchingBar = ({ onSubmit }) => {
	const handleSubmit = (values, actions) => {
		console.log(values);
		// onSubmit(values);
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

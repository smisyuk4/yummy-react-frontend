import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	FormStyled,
	SearchStyled,
	SearchFormBtn,
	Input,
} from './SearchingBar.styled';

export const SearchingBar = ({ changeValue }) => {
	const [searchValue, setsearchValue] = useState('');
	const { query } = useParams();
	useEffect(() => {
		if (query) {
			setsearchValue(query);
		}
	}, [query]);

	const handleSubmit = event => {
		event.preventDefault();
		changeValue(searchValue);
		// setsearchValue('');
	};

	const inputChange = event => {
		setsearchValue(event.target.value);
	};

	return (
		<SearchStyled>
			<FormStyled onSubmit={handleSubmit}>
				<div className="position">
					<Input
						name="search"
						type="text"
						autoComplete="off"
						autoFocus
						value={searchValue}
						onChange={inputChange}
						// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					/>
					<SearchFormBtn type="submit">
						<span>Search</span>
					</SearchFormBtn>
				</div>
			</FormStyled>
		</SearchStyled>
	);
};

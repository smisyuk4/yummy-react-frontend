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
      changeValue(query)
      setsearchValue(query);

    }
  }, [query, changeValue]);

  const handleSubmit = event => {
    event.preventDefault();
    changeValue(searchValue);
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
          />
          <SearchFormBtn type="submit">
            <span>Search</span>
          </SearchFormBtn>
        </div>
      </FormStyled>
    </SearchStyled>
  );
};

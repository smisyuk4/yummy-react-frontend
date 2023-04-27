import { Formik } from 'formik';
import { SearchStyled, SearchForm, SearchFormBtn, Input } from "./Searchbar.styled"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
const [value, setValue] = useState('');

  const handleSubmit = (values, actions) => {
    setValue(values.search);
    onSubmit(values.search);
    console.log(values.search)
    actions.resetForm();
  };

  return (
    <SearchStyled>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Input name='search' type='text' autoComplete='off' autoFocus />
          <NavLink to={`/search/${value}`}>
            <SearchFormBtn type='submit' >
            <span >Search</span>
          </SearchFormBtn>
          </NavLink>
        </SearchForm>
      </Formik>
    </SearchStyled>
  );
};

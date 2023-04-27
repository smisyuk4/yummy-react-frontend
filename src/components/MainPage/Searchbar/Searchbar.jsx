import { Formik } from 'formik';
import { SearchStyled, SearchForm, SearchFormBtn, Input } from "./Searchbar.styled"
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {


    return (
        <SearchStyled>
          <Formik initialValues={{ search: '' }}>
            {formik => {
              const { values } = formik;
              return (
                <SearchForm>
                  <Input
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                  />
                 <NavLink to={`/search/${values.search}`}>
                    <SearchFormBtn type="submit">
                      <span>Search</span>
                    </SearchFormBtn>
                  </NavLink>
                </SearchForm>
              );
            }}
          </Formik>
        </SearchStyled>
      );
    };

import { Formik } from 'formik';
import {
  SearchStyled,
  SearchForm,
  SearchFormBtn,
  Input,
} from './Searchbar.styled';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const toastifyOption = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const Searchbar = ({ onSubmit }) => {
  const validateValue = value => {
    if (!value.trim()) {
      toast.error('Enter something in the search box...', toastifyOption);
      return 'This field is required';
    }
  };

  return (
    <SearchStyled>
      <Formik initialValues={{ search: '' }}>
        {formik => {
          const { values } = formik;
          return (
            <SearchForm>
              <Input name="search" type="text" autoComplete="off" autoFocus />
              <NavLink
                to={!values.search.trim() ? '' : `/search/${values.search}`}
                onClick={() => validateValue(values.search)}
              >
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

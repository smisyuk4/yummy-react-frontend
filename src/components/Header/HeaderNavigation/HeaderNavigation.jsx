import { HeaderNavigationNav, HeaderNavlink, SearchImg } from './HeaderNavigation.styled';
import searchImg from 'images/headerImges/search.png';

export const HeaderNavigation = () => {
  return <HeaderNavigationNav>
            <HeaderNavlink to="/categories">Categories</HeaderNavlink>
            <HeaderNavlink to="/add">Add recipes</HeaderNavlink>
            <HeaderNavlink to="/my">My recipes</HeaderNavlink>
            <HeaderNavlink to="/favorite ">Favorites</HeaderNavlink>
            <HeaderNavlink to="/shopping-list">Shopping list</HeaderNavlink>
            <HeaderNavlink to="/search">
              <SearchImg src={searchImg} alt='search'></SearchImg>
            </HeaderNavlink>  
        </HeaderNavigationNav>;
};
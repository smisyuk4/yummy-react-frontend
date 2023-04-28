import { HeaderNavigationNav, HeaderNavlink } from './HeaderNavigation.styled';
import { SearchIcon } from '../BurgerMenu/BurgerMenu.styled';

export const HeaderNavigation = () => {
  return <HeaderNavigationNav>
            <HeaderNavlink to="/categories/Breakfast">Categories</HeaderNavlink>
            <HeaderNavlink to="/add">Add recipes</HeaderNavlink>
            <HeaderNavlink to="/my">My recipes</HeaderNavlink>
            <HeaderNavlink to="/favorite ">Favorites</HeaderNavlink>
            <HeaderNavlink to="/shopping-list">Shopping list</HeaderNavlink>
            <HeaderNavlink to="/search?type=Ingredients">
              <SearchIcon id="icon-search"></SearchIcon>
            </HeaderNavlink>  
        </HeaderNavigationNav>;
};
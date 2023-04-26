import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
	DivStyled,
	SearchByBox,
	TitleSearch,
	SelectStyled,
	OptionStyled,
	CardList,
	CardItem,
	Image,
	CardBox,
	CardTitle,
} from './SearchingPage.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { SearchingBar } from './Searchingbar';
import {
	fetchByTitle,
	fetchByIngredients,
	fetchByGlobalIngredients,
} from './FetchWithCategory';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchingPage = () => {
	const [type, settype] = useState('Title');
	const [cards, setcards] = useState([]);
	const [totalRecipes, settotalRecipes] = useState(0);
	const [page, setpage] = useState(1);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	//! Установил сколько будет на странице (сколько качать с бэкэнда)
	let limit = windowWidth <= 1439 ? 6 : 12;

	const selectFunc = () => {
		settype(document.querySelector('select').value);
	};

	const changeValueFunc = value => {
		settotalRecipes(0);
		//! Если ничего не ввели в поиск то ...
		if (!value) {
			toast.error('Enter something in the search box...', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
		//! Если запрос по TITLE
		if (type === 'Title') {
			fetchByTitle(value, { page, limit })
				.then(({ data }) => {
					setcards(data.data.recipes);
					settotalRecipes(data.data.totalRecipes);
				})
				.catch(error => error);
		}
		//! Если запрос по Ingredients
		if (type === 'Ingredients') {
			fetchByIngredients(value, { page, limit })
				.then(({ data }) => {
					setcards(data.data.recipes);
					settotalRecipes(data.data.totalRecipes);
				})
				.catch(error => error);
		}
		//! Если запрос по Global Ingredients (ПОКА НЕ РАБОТАЕТ ЗАПРОС)
		if (type === 'Global Ingredients') {
			fetchByGlobalIngredients(value)
				.then(({ data }) => {
					console.log(data);
					// setcards(data.data.recipes);
					// settotalRecipes(data.data.totalRecipes);
				})
				.catch(error => error);
		}
	};

	console.log(type);
	console.log(totalRecipes, setpage);

	return (
		<DivStyled>
			<ReusableComponentTitleWithJewelry title="Search" />
			<SearchingBar changeValue={changeValueFunc} />
			<SearchByBox>
				<TitleSearch>Search by:</TitleSearch>
				<SelectStyled onChange={selectFunc}>
					<OptionStyled value="Title">Title</OptionStyled>
					<OptionStyled value="Ingredients">Ingredients</OptionStyled>
					<OptionStyled value="Global Ingredients">
						Global Ingredients
					</OptionStyled>
				</SelectStyled>
			</SearchByBox>
			<CardList>
				{cards.map(({ _id, title, thumb }) => {
					return (
						<CardItem key={title}>
							<NavLink
								className="card-link"
								to={`/recipe/${_id}`}
								replace={true}>
								<Image src={thumb} alt={title} />
								<CardBox>
									<CardTitle>{title}</CardTitle>
								</CardBox>
							</NavLink>
						</CardItem>
					);
				})}
			</CardList>
		</DivStyled>
	);
};

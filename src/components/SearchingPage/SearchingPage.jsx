import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
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
	DivNoResultsStyle,
} from './SearchingPage.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { SearchingBar } from './Searchingbar';
import {
	fetchByTitle,
	fetchByIngredients,
	fetchByGlobalIngredients,
} from './FetchWithCategory';
import { NoResults } from 'components/NoResults';
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Pagination } from './Pagination/Pagination';

export const SearchingPage = () => {
	const [type, settype] = useState('Title');
	const [cards, setcards] = useState([]);
	const [totalRecipes, settotalRecipes] = useState(0);
	const [page, setpage] = useState(1);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isLoading, setisLoading] = useState(false);
	const [isFind, setisFind] = useState(true);
	const [searchParam, setSearchParam] = useSearchParams();
	const [query, setQuery] = useState('');

	let limit = windowWidth <= 1439 ? 6 : 12;

	useEffect(() => {
		if (!query) return;
		settotalRecipes(0);

		//! Если запрос по TITLE
		if (type === 'Title') {
			setisFind(true);
			setisLoading(true);
			fetchByTitle(query, { page, limit })
				.then(({ data }) => {
					if (data.data.recipes.length === 0) {
						setisFind(false);
						setisLoading(false);
						setcards([]);
						settotalRecipes(0);
						return;
					}
					setisLoading(false);
					setcards(data.data.recipes);
					settotalRecipes(data.data.totalRecipes);
				})
				.catch(() => {
					setisFind(false);
					setisLoading(false);
					setcards([]);
					settotalRecipes(0);
					return;
				});
		}
		//! Если запрос по Ingredients
		if (type === 'Ingredients') {
			setisFind(true);
			setisLoading(true);
			fetchByIngredients(query, { page, limit })
				.then(({ data }) => {
					if (data.data.recipes.length === 0) {
						setisFind(false);
						setisLoading(false);
						setcards([]);
						settotalRecipes(0);
						return;
					}
					setisLoading(false);
					setcards(data.data.recipes);
					settotalRecipes(data.data.totalRecipes);
				})
				.catch(() => {
					setisFind(false);
					setisLoading(false);
					setcards([]);
					settotalRecipes(0);
					return;
				});
		}
		//! Если запрос по Global Ingredients
		if (type === 'Global') {
			setisFind(true);
			setisLoading(true);
			fetchByGlobalIngredients(query, { page, limit })
				.then(({ data }) => {
					if (data.data.recipes.length === 0) {
						setisFind(false);
						setisLoading(false);
						setcards([]);
						settotalRecipes(0);
						return;
					}
					setisLoading(false);
					setcards(data.data.recipes);
					settotalRecipes(data.data.totalRecipes);
				})
				.catch(() => {
					setisFind(false);
					setisLoading(false);
					setcards([]);
					settotalRecipes(0);
					return;
				});
		}
	}, [query, page, limit, type]);

	useEffect(() => {
		if (!searchParam.get('type')) {
			settype('Title');
		} else {
			settype(searchParam.get('type'));
		}

		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [searchParam]);

	//! Установил сколько будет на странице (сколько качать с бэкэнда)

	const selectFunc = () => {
		const value = document.querySelector('select').value;
		settype(value);
		setSearchParam({ type: value });
	};

	const handleQuery = value => {
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
			return;
		}
		setQuery(value);
	};
	const handlePagination = activePage => {
		setpage(activePage);
	};

	// console.log(totalRecipes);
	console.log(page);

	return (
		<DivStyled>
			<ReusableComponentTitleWithJewelry title="Search" />
			<SearchingBar changeValue={handleQuery} />
			<SearchByBox>
				<TitleSearch>Search by:</TitleSearch>
				<SelectStyled value={type} onChange={selectFunc}>
					<OptionStyled value="Title">Title</OptionStyled>
					<OptionStyled value="Ingredients">Ingredients</OptionStyled>
					<OptionStyled value="Global">
						Global Ingredients
					</OptionStyled>
				</SelectStyled>
			</SearchByBox>
			{isLoading === true ? (
				<ColorRing
					visible={true}
					ariaLabel="blocks-loading"
					wrapperClass="blocks-wrapper"
					colors={[
						'#2a2c36',
						'#04711a',
						'#4ebb46',
						'#8cc293',
						'#cfd8d4',
					]}
				/>
			) : null}
			{isFind === false ? (
				<DivNoResultsStyle>
					<NoResults
						text={`No found recipes with this search: ${query}`}
					/>
				</DivNoResultsStyle>
			) : (
				<CardList>
					{cards.map(({ _id, title, thumb }) => {
						return (
							<CardItem key={title}>
								<NavLink
									className="card-link"
									to={`/recipes/${_id}`}
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
			)}
			{totalRecipes / limit > 1 && (
				<Pagination
					pagecount={Math.ceil(totalRecipes / limit)}
					onChange={handlePagination}
					page={page}
				/>
			)}
		</DivStyled>
	);
};

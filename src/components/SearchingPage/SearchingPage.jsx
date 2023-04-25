import { useState } from 'react';
import {
	DivStyled,
	SearchByBox,
	TitleSearch,
	SelectStyled,
	OptionStyled,
	// CardList,
	// CardItem,
	// NavLink,
	// Image,
	// CardBox,
	// CardTitle,
} from './SearchingPage.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { SearchingBar } from './Searchingbar';
import { fetchByTitle } from 'components/CategoriesPage/FetchWithCategory';

export const SearchingPage = () => {
	const [type, settype] = useState('Title');
	const [searchValue, setsearchValue] = useState('');

	const selectFunc = () => {
		settype(document.querySelector('select').value);
	};

	const changeValueFunc = value => {
		setsearchValue(value.search);
		fetchByTitle(searchValue)
			.then(({ data }) => console.log(data))
			.catch(error => error);
	};
	// console.log(type);
	// console.log(searchValue);

	return (
		<DivStyled>
			<ReusableComponentTitleWithJewelry title="Search" />
			<SearchingBar changeValue={changeValueFunc} />
			<SearchByBox>
				<TitleSearch>Search by:</TitleSearch>
				<SelectStyled onChange={selectFunc}>
					<OptionStyled value="Title">Title</OptionStyled>
					<OptionStyled value="Ingrediets">Ingrediets</OptionStyled>
				</SelectStyled>
			</SearchByBox>
			{/* <CardList>
				{oneCategory.map(({ _id, title, thumb }) => {
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
			</CardList> */}
		</DivStyled>
	);
};

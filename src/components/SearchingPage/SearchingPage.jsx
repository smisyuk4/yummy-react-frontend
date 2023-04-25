import { useState } from 'react';
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
import { fetchByTitle } from './FetchWithCategory';

export const SearchingPage = () => {
	const [type, settype] = useState('Title');
	const [cards, setcards] = useState([]);

	const selectFunc = () => {
		settype(document.querySelector('select').value);
	};

	const changeValueFunc = value => {
		// console.log(value);
		fetchByTitle(value)
			.then(({ data }) => setcards(data.data.recipes))
			.catch(error => error);
	};
	// console.log(type);

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

import {
	DivStyled,
	SearchByBox,
	TitleSearch,
	SelectStyled,
	OptionStyled,
} from './SearchingPage.styled';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
import { SearchingBar } from './Searchingbar';

export const SearchingPage = () => {
	const selectFunc = () => {
		const selectedOption = document.querySelector('select').value;
		console.log(selectedOption);
	};

	return (
		<DivStyled>
			<ReusableComponentTitleWithJewelry title="Search" />
			<SearchingBar />
			<SearchByBox>
				<TitleSearch>Search by:</TitleSearch>
				<SelectStyled onChange={selectFunc}>
					<OptionStyled value="Title">Title</OptionStyled>
					<OptionStyled value="Ingrediets">Ingrediets</OptionStyled>
				</SelectStyled>
			</SearchByBox>
		</DivStyled>
	);
};

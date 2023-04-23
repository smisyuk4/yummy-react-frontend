import {
	DivStyled,
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
	CategoryList,
	CategoryItem,
} from './CategorySelection.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllCategory } from '../FetchWithCategory';

export const CategorySelection = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		fetchAllCategory()
			.then(({ data }) => setCategory(data.data.resultCategory))
			.catch(error => error);
	}, []);

	const { categoryName } = useParams();
	console.log(categoryName);

	return (
		<DivStyled>
			<TitleStyled>Categories</TitleStyled>
			<JewelryBox>
				<JewelryBoxBig />
				<JewelryBoxBig />
				<JewelryBoxSmall />
			</JewelryBox>
			<CategoryList>
				{category.map(categ => {
					return <CategoryItem>{categ}</CategoryItem>;
				})}
			</CategoryList>
		</DivStyled>
	);
};

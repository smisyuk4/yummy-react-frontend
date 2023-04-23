import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
	DivStyled,
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
	CategoryList,
	CategoryItem,
	CardList,
	CardItem,
	CardBox,
	CardTitle,
	Image,
	DivPositionen,
	ImageBG,
} from './CategorySelection.styled';
import { fetchAllCategory, fetchOneCategory } from '../FetchWithCategory';

export const CategorySelection = () => {
	const [category, setCategory] = useState([]);
	const [oneCategory, setOneCategory] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		fetchAllCategory()
			.then(({ data }) => setCategory(data.data.resultCategory))
			.catch(error => error);
	}, []);

	useEffect(() => {
		fetchOneCategory(categoryName)
			.then(({ data }) => setOneCategory(data.resultCategory))
			.catch(error => error);
	}, [categoryName]);

	return (
		<DivStyled>
			<TitleStyled>Categories</TitleStyled>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
			<CategoryList>
				{category.map(categ => {
					return (
						<CategoryItem
							key={categ}
							className={
								categ === categoryName ? 'isActive' : null
							}>
							{categ}
						</CategoryItem>
					);
				})}
			</CategoryList>
			<CardList>
				{oneCategory.map(({ title, thumb }) => {
					return (
						<CardItem key={title}>
							<Image src={thumb} alt={title} />
							<CardBox>
								<CardTitle>{title}</CardTitle>
							</CardBox>
						</CardItem>
					);
				})}
			</CardList>
			<DivPositionen>
				<ImageBG />
			</DivPositionen>
		</DivStyled>
	);
};

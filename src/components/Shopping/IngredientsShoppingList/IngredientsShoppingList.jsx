import { useState, useEffect } from 'react';

import {
	deleteIngredientInShoppingList,
	getShoppingList,
} from '../fetchShoppingList';

import {
	CloseBtn,
	ItemShoppingList,
	ShoppingList,
	// DivContainer,
	ListBar,
	ItemBar,
	CloseIcon,
	TaglineP,
	ContainerImg,
	Measure,
	EmptyList,
	ShopBag,
	ContainerEmpty,
} from './IngredientsShoppingList.styled';


const IngredientsShoppingList = () => {
	const [shoppingList, setShoppingList] = useState([]);
	
	useEffect(() => {
		getShoppingList()
			.then(({ data }) => setShoppingList(data.shoppingList))
			.catch(error => console.error(error));
	}, []);

	const onDelete = async ingredientId => {
		await deleteIngredientInShoppingList(ingredientId);
		setShoppingList(prevState =>
			prevState.filter(ingredient => ingredient._id !== ingredientId)
		);
	};

	// const groupedShoppingList = shoppingList.reduce((acc, curr) => {
	// 	if (!acc[curr.ingredientId]) {
	// 		acc[curr.ingredientId] = { ...curr, measures: [curr.measure] };
	// 	} else {
	// 		acc[curr.ingredientId].measures.push(curr.measure);
	// 	}
	// 	return acc;
	// }, {});

	// const groupedShoppingListArray = Object.values(groupedShoppingList);

	return (
		<div>
			{shoppingList.length > 0 && (
				// <DivContainer>
					<ListBar>
						<ItemBar>Products</ItemBar>
						<ItemBar>Number</ItemBar>
						<ItemBar>Remove</ItemBar>
					</ListBar>
				// </DivContainer>
			)}
			<ShoppingList>
				{shoppingList.length > 0 &&
					shoppingList.map(({ _id, ttl, thb, measure }) => (
						<ItemShoppingList key={_id}>
							<ContainerImg>
								<img src={thb} alt={ttl} />
							</ContainerImg>
							<TaglineP>{ttl}
							 <br/>
							{/* <p>{recipe}</p> */}
							</TaglineP>
							<Measure>{measure}</Measure>
							<CloseBtn
								type="button"
								onClick={() => onDelete(_id)}>
								<CloseIcon id="icon-close" />
							</CloseBtn>
						</ItemShoppingList>
					))}
			</ShoppingList>
			{shoppingList.length === 0 && (
				<ContainerEmpty>
					<ShopBag id="icon-cart" />
					<EmptyList>Your Shopping List is Empty</EmptyList>
				</ContainerEmpty>
			)}
		</div>
	);
};
export default IngredientsShoppingList;

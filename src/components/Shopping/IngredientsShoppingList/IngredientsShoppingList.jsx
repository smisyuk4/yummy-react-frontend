import { useState, useEffect } from 'react';

import {
	// deleteIngredientInShoppingList,
	getShoppingList,
} from '../fetchShoppingList';

import {
	CloseBtn,
	ItemShoppingList,
	SpanMeasure,
	ShoppingList,
	DivContainer,
	ListBar,
	ItemBar,
} from './IngredientsShoppingList.styled';
import { Icon } from 'components/Icon';

// import ItemShoppingList from '../ItemShoppingList/ItemShoppingList';

const IngredientsShoppingList = () => {
	const [shoppingList, setShoppingList] = useState([]);
	// const [delIngredient, setDelIngredient] = useState('');

	useEffect(() => {
		getShoppingList()
			.then(({ data }) => setShoppingList(data.shoppingList))
			.catch(error => console.error(error));
	}, []); // приходить масив з шопінг

	  const ingredientId = shoppingList.map(({ ttl}) => ttl);
console.log(ingredientId)

	// 	useEffect(() => {
	// 		deleteIngredientInShoppingList(ingredientId)
	// .then(({data}) => setDelIngredient(data, console.log(data)))
	// .catch((error) => error);
	// 	}, [ingredientId]);

	// const onDelete = (id) => {
	// 	setShoppingList(prevState => prevState.filter(ingredient => ingredient.id !== id)
	// 	);
	// };
	return (
		<div>
			<DivContainer>
				<ListBar>
					<ItemBar>Products</ItemBar>
					<ItemBar>Number</ItemBar>
					<ItemBar>Remove</ItemBar>
				</ListBar>
			</DivContainer>
			<ShoppingList>
				{shoppingList &&
					shoppingList.map(({ _id, ttl, thb, measure }) => (
						<ItemShoppingList key={_id}>
			<img src={thb} alt={ttl} width={60} height={60} />
			<p>{ttl}</p>
			<SpanMeasure>{measure}</SpanMeasure>
			<CloseBtn type="button">
			<Icon id="icon-close" height="14" width="14" style={{ stroke: '#333333' }} /></CloseBtn>
		</ItemShoppingList>
					))}
			</ShoppingList>
			{shoppingList < 1 && <p>Your Shopping List is Empty</p>}
		</div>
	);
};
export default IngredientsShoppingList;

import { useState, useEffect } from 'react';

import {
	deleteIngredientInShoppingList,
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


const IngredientsShoppingList = () => {
	const [shoppingList, setShoppingList] = useState([]);

	useEffect(() => {
		getShoppingList()
			.then(({ data }) => setShoppingList(data.shoppingList))
			.catch(error => console.error(error));
	}, []);
	
	const onDelete = async ingredientId => {
		await deleteIngredientInShoppingList(ingredientId);
		setShoppingList(prevState => prevState.filter(ingredient => ingredient._id !== ingredientId))
	
	};
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
							<CloseBtn type="button" onClick={() => onDelete(_id)}>
								<Icon
									id="icon-close"
									height="14"
									width="14"
									style={{ stroke: '#333333' }}
								/>
							</CloseBtn>		
						</ItemShoppingList>
					))}
			</ShoppingList>
			{shoppingList < 1 && <p>Your Shopping List is Empty</p>}
		</div>
	);
};
export default IngredientsShoppingList;

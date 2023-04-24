// import { ColorRing } from "react-loader-spinner";
import { SpanMeasure, ItemShoppingList, ShoppingList, DivContainer, ListBar, ItemBar } from "./IngredientsShoppingListstyled";

import { useState, useEffect } from 'react';
import { deletIngredientInShoppingList, getShoppingList }  from '../fetchShoppingList'
import { useParams } from "react-router-dom";

const IngredientsShoppingList = () => {
	const [ingredient, setIngredient] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getShoppingList().then(({data}) => setIngredient(console.log(data.data.shoppingList))).catch(error => error);
	}, []);

	useEffect(() => {
		deletIngredientInShoppingList(id).then(({data}) => setIngredient(data.shoppingList)).catch(error => error);
	}, [id]);

	const onDelete = ingredientId => {
		setIngredient(prevState => prevState.filter(ingredient => ingredient.id !== ingredientId)
		);
	};

	
	

	// if (isLoading)
	// 	return (
	// 		<ColorRing
	// 			visible={true}
	// 			ariaLabel="blocks-loading"
	// 			wrapperClass="blocks-wrapper"
	// 			colors={
	// 				['#2a2c36', '#04711a', '#4ebb46', '#8cc293', '#cfd8d4']}
	// 		/>
	// 	);
	return (
	<div>
		<DivContainer>
			<ListBar>
				<ItemBar style={{ marginRight: "167px" }}>Prodacts</ItemBar>
				<ItemBar style={{ marginRight: "24px" }}>Number</ItemBar>
				<ItemBar>Remove</ItemBar>
			</ListBar>
		</DivContainer>
		<ShoppingList >
		{ingredient.length > 0 &&
          ingredient.map(({ _id, ttl, thb, measure }) => (
            <ItemShoppingList key={_id}>
			<img src={thb} alt={ttl} />
				<p>{ttl}Name ingredient</p>
				<SpanMeasure>{measure}6 g</SpanMeasure>
				<button type="button" onClick={onDelete}>
					remove
				</button>
			</ItemShoppingList>
          ))}
		</ShoppingList>
	</div>
	)}
export default IngredientsShoppingList;
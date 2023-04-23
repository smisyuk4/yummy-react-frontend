import { useEffect, useState } from 'react';
import { RecipeIngredientsFieldsCounter } from '../RecipeIngredientsFieldsCounter';
import { RecipeingredientsListItem } from '../RecipeIngredientsListItem';
import { getAllIngredients } from '../fetchIngredients';
import { v4 as uuidv4 } from 'uuid';

export const RecipeIngredientsFields = () => {
	const [ingredientsQuantity, setIgredientsQuantity] = useState(0);
	const [allIngredientsList, setAllIngredientsList] = useState([]);
	const [addedIngredientsArray, setAddedIngredientsArray] = useState([]);

	const fetchIngredients = async () => {
		const fetchedIngredientsList = await getAllIngredients();

		const reworkedList = fetchedIngredientsList.data.data.ingretients.map(
			ingredient => {
				return { id: ingredient._id, ttl: ingredient.ttl };
			}
		);
		setAllIngredientsList(reworkedList);
	};

	useEffect(() => {
		fetchIngredients();
	}, []);

	const onIncrement = () => {
		setIgredientsQuantity(ingredientsQuantity + 1);
		setAddedIngredientsArray(prevState => [
			...prevState,
			{ id: uuidv4(),ingredientId:'', ttl: '', measure: '' },
		]);
		console.log(addedIngredientsArray);
	};

	const onDecrement = () => {
		if (ingredientsQuantity !== 0) {
			setIgredientsQuantity(ingredientsQuantity - 1);
			setAddedIngredientsArray(prevState => {
				const filteredArray = prevState.filter(
					element => prevState[prevState.length - 1].id !== element.id
				);
				return filteredArray;
			});
			console.log(addedIngredientsArray);
		}
	};

	const getIngredientName = (id, data) => {
		console.log(2, id, data);
		const requstedIngredient = allIngredientsList.find(
			ingredient => ingredient.ttl === data.ttl
		);
		const updatedArray = addedIngredientsArray.map(ingredient => {
			if (id === ingredient.id) {
				return (ingredient = {
					id: id,
					ingredientId: requstedIngredient
						? requstedIngredient.id
						: '',
					ttl: data.ttl,
					measure: ingredient.measure,
				});
			}
			return ingredient;
		});
		setAddedIngredientsArray(updatedArray);
	};

	const getIngredientMeasure = (id, data) => {
		const updatedArray = addedIngredientsArray.map(ingredient => {
			if (id === ingredient.id) {
				return (ingredient = {
					id: id,
					ingredientId: ingredient.ingredientId,
					ttl: ingredient.ttl,
					measure: data.measure,
				});
			}
			return ingredient;
		});
		setAddedIngredientsArray(updatedArray);
	};
	console.log(addedIngredientsArray);

	const onButtonDeleteClick = e => {
		const id = e.currentTarget.id;
		console.log(1, id);

		const reworkedArray = addedIngredientsArray.filter(
			element => element.id !== id
		);
		console.log(reworkedArray);

		setAddedIngredientsArray(reworkedArray);
		setIgredientsQuantity(ingredientsQuantity - 1);
	};

	return (
		<div>
			<h2>Ingredients</h2>
			<RecipeIngredientsFieldsCounter
				onDecrementClick={onDecrement}
				onIncrementClick={onIncrement}
				count={ingredientsQuantity}></RecipeIngredientsFieldsCounter>
			{ingredientsQuantity !== 0 && (
				<ul>
					{addedIngredientsArray.map(item => {
						return (
							<RecipeingredientsListItem
								key={item.id}
								item={item}
								allIngredientsList={allIngredientsList}
								addedIngredientsArray={addedIngredientsArray}
								onButtonDeleteClick={onButtonDeleteClick}
								getIngredientName={getIngredientName}
								getIngredientMeasure={
									getIngredientMeasure
								}></RecipeingredientsListItem>
						);
					})}
				</ul>
			)}
		</div>
	);
};

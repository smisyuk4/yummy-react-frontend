import { useEffect, useState } from 'react';
import { IngredientCounter } from '../IngredientCounter';
import { IngredientsUl } from '../IngredientsUl';
import { getAllIngredients } from '../fetchIngredients';
import { v4 as uuidv4 } from 'uuid';

export const IngredientsList = () => {
	const [ingredientsQuantity, setIgredientsQuantity] = useState(0);
	const [allIngredientsList, setAllIngredientsList] = useState([]);

	const [addedIngredientsArray, setIngredientsArray] = useState([]);

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
		setIngredientsArray(prevState => [
			...prevState,
			{ id: uuidv4(), ttl: '' },
		]);
		console.log(addedIngredientsArray);
	};

	const onDecrement = () => {
		if (ingredientsQuantity !== 0) {
			setIgredientsQuantity(ingredientsQuantity - 1);
			setIngredientsArray(prevState => {
				const filteredArray = prevState.filter(
					element => prevState[prevState.length - 1].id !== element.id
				);
				return filteredArray;
			});
			console.log(addedIngredientsArray);
		}
	};

	const onButtonDeleteClick = e => {
		const id = e.currentTarget.value;

		setIgredientsQuantity(ingredientsQuantity - 1);
		setIngredientsArray(prevState => {
			const filteredArray = prevState.filter(
				element => id !== element.id
			);
			return filteredArray;
		});
	};


	return (
		<div>
			<h2>Ingredients</h2>
			<IngredientCounter
				onDecrementClick={onDecrement}
				onIncrementClick={onIncrement}
				count={ingredientsQuantity}></IngredientCounter>
			{ingredientsQuantity !== 0 && (
				<IngredientsUl
					allIngredientsList={allIngredientsList}
					addedIngredientsArray={addedIngredientsArray}
					onButtonDeleteClick={onButtonDeleteClick}
				></IngredientsUl>
			)}
		</div>
	);
};

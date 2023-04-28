import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { RecipeIngredientsFieldsCounter } from '../RecipeIngredientsFieldsCounter';
import { RecipeingredientsListItem } from '../RecipeIngredientsListItem';
import { getAllIngredients } from '../fetchIngredients';
import { v4 as uuidv4 } from 'uuid';
import {
	HeadingStyledContainer,
	RecipeIngredientsHeading,
	RecipeIngredientsFieldset,
	RecipeIngredientsUl,
} from './RecipeIngredientsFields.styled';
import { EmptyFieldNotation } from '../RecipePreparationFields/RecipePreparationFields.styled';

export const RecipeIngredientsFields = props => {
	const [ingredientsQuantity, setIgredientsQuantity] = useState(0);
	const [allIngredientsList, setAllIngredientsList] = useState([]);
	const [addedIngredientsArray, setAddedIngredientsArray] = useState([]);
	const [anyEmptyFieldsState, setAnyEmptyFieldsState] = useState(true);

	const fetchIngredients = async () => {
		const fetchedIngredientsList = await getAllIngredients();

		// const reworkedList = fetchedIngredientsList.data.data.ingretients.map(
		// 	ingredient => {
		// 		return { id: ingredient._id, ttl: ingredient.ttl };
		// 	}
		// );
		setAllIngredientsList(fetchedIngredientsList.data.data.ingretients);
	};

	useEffect(() => {
		fetchIngredients();
	}, []);

	useEffect(() => {
		if (addedIngredientsArray !== undefined) {
			addedIngredientsArray.map(ingredient => {
				if (ingredient.emptyFields) {
					return setAnyEmptyFieldsState(true);
				} else {
					return setAnyEmptyFieldsState(false);
				}
			});
		}
	}, [addedIngredientsArray]);

	useEffect(() => {
		props.onChange(addedIngredientsArray);
	}, [addedIngredientsArray, props]);

	const onIncrement = () => {
		setIgredientsQuantity(ingredientsQuantity + 1);
		setAddedIngredientsArray(prevState => [
			...prevState,
			{
				id: uuidv4(),
				ingredientId: '',
				ttl: '',
				measure: '',
				emptyFields: true,
			},
		]);
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
		}
	};

	const getIngredientName = (id, data) => {
		const requstedIngredient = allIngredientsList.find(
			ingredient => ingredient.ttl === data.ttl
		);

		// console.log('requstedIngredient', requstedIngredient);
		const updatedArray = addedIngredientsArray.map(ingredient => {
			if (id === ingredient.id) {
				return (ingredient = {
					id: id,
					ingredientId: requstedIngredient
						? requstedIngredient._id
						: '',
					ttl: data.ttl,
					measure: ingredient.measure,
					emptyFields: ingredient.emptyFields,
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
					emptyFields: ingredient.emptyFields,
				});
			}
			return ingredient;
		});
		setAddedIngredientsArray(updatedArray);
	};

	const getEmptyFieldData = (id, data) => {
		console.log(data);
		const updatedArray = addedIngredientsArray.map(ingredient => {
			if (id === ingredient.id) {
				return (ingredient = {
					id: id,
					ingredientId: ingredient.ingredientId,
					ttl: ingredient.ttl,
					measure: ingredient.measure,
					emptyFields: data,
				});
			}
			return ingredient;
		});
		setAddedIngredientsArray(updatedArray);
	};

	// console.log('addDataArray', addedIngredientsArray);
	const onButtonDeleteClick = e => {
		const id = e.currentTarget.id;
		console.log(1, id);

		const reworkedArray = addedIngredientsArray.filter(
			element => element.id !== id
		);
		// console.log(reworkedArray);

		setAddedIngredientsArray(reworkedArray);
		setIgredientsQuantity(ingredientsQuantity - 1);
	};
<<<<<<< HEAD

	console.log("addedIngredientsArray ", addedIngredientsArray)
=======
	// console.log(addedIngredientsArray);
>>>>>>> 44de6dbc57ec3e4d5a7cf1754b93dc268cae3c97
	return (
		<RecipeIngredientsFieldset>
			<HeadingStyledContainer>
				<RecipeIngredientsHeading>
					Ingredients
					{anyEmptyFieldsState && (
						<EmptyFieldNotation> *</EmptyFieldNotation>
					)}
				</RecipeIngredientsHeading>
				<RecipeIngredientsFieldsCounter
					onDecrementClick={onDecrement}
					onIncrementClick={onIncrement}
					count={
						ingredientsQuantity
					}></RecipeIngredientsFieldsCounter>
			</HeadingStyledContainer>
			{ingredientsQuantity !== 0 && (
				<RecipeIngredientsUl>
					{addedIngredientsArray.map(item => {
						return (
							<RecipeingredientsListItem
								key={item.id}
								item={item}
								allIngredientsList={allIngredientsList}
								addedIngredientsArray={addedIngredientsArray}
								onButtonDeleteClick={onButtonDeleteClick}
								getIngredientName={getIngredientName}
								getIngredientMeasure={getIngredientMeasure}
								getEmptyFieldData={
									getEmptyFieldData
								}>
									
								</RecipeingredientsListItem>
						);
					})}
				</RecipeIngredientsUl>
			)}
		</RecipeIngredientsFieldset>
	);
};

RecipeIngredientsFields.propType = {
	onChange: PropTypes.func.isRequired,
};

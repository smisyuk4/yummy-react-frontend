import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import {
	StyledIngredientInput,
	StyledMeasureInput,
	StyledHelpListShowButton,
	StyledIngredientLabel,
	StyledMeasureLabel,
	StyledCloseButton,
	DropdownMeasureContainer,
	DropdownIngredientContainer,
	DropdownIngredientUl,
	DropdownHideButton,
	DropdownListPosition,
	DropdownButtonIcon,
	ListItemDeleteIcon,
	StyledMeasureValueInput,
	EmptyFieldNotation,
	IngredientsListItem,
} from './RecipeIngredientListItem.styled';

export const RecipeingredientsListItem = ({
	allIngredientsList,
	onButtonDeleteClick,
	item,
	getIngredientName,
	getIngredientMeasure,
	getEmptyFieldData,
}) => {
	const measureOptions = ['tbs', 'tsp', 'g', 'kg', 'l', 'ml'];
	const [ingredientFilter, setIngredientFilter] = useState('');
	const [filteredIngredients, setFiltredIngredients] = useState([]);
	const [ingredientHelpListState, setIngredientHelpListState] =
		useState(false);
	const [measureHelpListState, setMeasureHelpListState] = useState(false);
	const [measure, setMeasure] = useState('');
	const [measueValue, setMeasureValue] = useState('');
	const [measureEmptyState, setMeasureEmptyState] = useState(true);
	const [ingredientEmptyState, setIngredientEmptyState] = useState(true);

	useEffect(() => {
		setFiltredIngredients(
			allIngredientsList.filter(({ ttl }) =>
				ttl.toLowerCase().includes(ingredientFilter.toLowerCase())
			)
		); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingredientFilter]);

	useEffect(() => {
		if (ingredientFilter === '') {
			setIngredientEmptyState(true);
		} else {
			setIngredientEmptyState(false);
		}
		getIngredientName(item.id, {
			ttl: ingredientFilter,
		}); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingredientFilter, item.id]);
	useEffect(() => {
		if (measure === '' || measueValue === '') {
			setMeasureEmptyState(true);
		} else {
			setMeasureEmptyState(false);
		}

		getIngredientMeasure(item.id, {
			measure: measueValue.toString() + ' ' + measure,
		}); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [measure, measueValue, item.id]);

	useEffect(() => {
		getEmptyFieldData(item.id, measureEmptyState || ingredientEmptyState); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [measureEmptyState, ingredientEmptyState, item.id]);

	const openIngredientHelpList = e => {
		setIngredientHelpListState(true);
	};

	const closeIngredientHelpList = e => {
		setIngredientHelpListState(false);
	};

	const openMeasureHelpList = e => {
		setMeasureHelpListState(true);
	};

	const closeMeasureHelpList = e => {
		setMeasureHelpListState(false);
	};

	const onIgredientChange = e => {
		openIngredientHelpList(e);
		setIngredientFilter(e.currentTarget.value);
	};

	const onMeasureValueChange = e => {
		openMeasureHelpList(e);
		setMeasureValue(e.currentTarget.value);
	};
	const onMeasureChange = e => {
		openMeasureHelpList(e);
		setMeasure(e.currentTarget.value);
	};

	const onIngredientsHelpListSelect = e => {
		setIngredientHelpListState(false);
		setIngredientFilter(e.currentTarget.textContent);
	};

	const onMeasureHelpListSelect = e => {
		setMeasureHelpListState(false);
		setMeasure(e.currentTarget.textContent);
	};
	return (
		<Formik>
			<IngredientsListItem key={item.id}>
				<StyledIngredientLabel htmlFor="ingredientName">
					<StyledIngredientInput
						name="ingredientName"
						onChange={onIgredientChange}
						value={item.ttl}
						autoComplete="false"></StyledIngredientInput>
					<StyledHelpListShowButton
						type="button"
						onClick={openIngredientHelpList}>
						<DropdownButtonIcon
							id="icon-arrow-down"
							width={14}
							height={14}></DropdownButtonIcon>
					</StyledHelpListShowButton>
					{ingredientHelpListState && (
						<DropdownIngredientContainer>
							<DropdownHideButton
								type="button"
								onClick={closeIngredientHelpList}>
								<DropdownButtonIcon
									id="icon-arrow-up"
									width={14}
									height={14}></DropdownButtonIcon>
							</DropdownHideButton>
							<DropdownIngredientUl>
								{filteredIngredients.map(({ _id, ttl }) => {
									return (
										<li key={uuidv4()}>
											<DropdownListPosition
												id={_id}
												type="button"
												onClick={
													onIngredientsHelpListSelect
												}>
												{ttl}
											</DropdownListPosition>
										</li>
									);
								})}
							</DropdownIngredientUl>
						</DropdownIngredientContainer>
					)}
				</StyledIngredientLabel>
				<StyledMeasureLabel htmlFor="measure">
					<StyledMeasureValueInput
						name="measureValue"
						onChange={onMeasureValueChange}
						type="number"
						min="0"
						max="999"
						value={measueValue}
						autoComplete="false"></StyledMeasureValueInput>
					<StyledMeasureInput
						name="measure"
						value={measure}
						onChange={onMeasureChange}
						autoComplete="false"></StyledMeasureInput>
					<StyledHelpListShowButton
						type="button"
						onClick={openMeasureHelpList}>
						<DropdownButtonIcon
							id="icon-arrow-down"
							width={14}
							height={14}></DropdownButtonIcon>
					</StyledHelpListShowButton>
					{measureHelpListState && (
						<DropdownMeasureContainer>
							<DropdownHideButton
								type="button"
								onClick={closeMeasureHelpList}>
								<DropdownButtonIcon
									id="icon-arrow-up"
									width={14}
									height={14}></DropdownButtonIcon>
							</DropdownHideButton>
							<DropdownIngredientUl>
								{measureOptions.map(optionValue => {
									return (
										<li key={uuidv4()}>
											<DropdownListPosition
												type="button"
												onClick={
													onMeasureHelpListSelect
												}>
												{optionValue}
											</DropdownListPosition>
										</li>
									);
								})}
							</DropdownIngredientUl>
						</DropdownMeasureContainer>
					)}
				</StyledMeasureLabel>
				{(measureEmptyState || ingredientEmptyState) && (
					<EmptyFieldNotation>*</EmptyFieldNotation>
				)}
				<StyledCloseButton
					onClick={onButtonDeleteClick}
					id={item.id}
					type="button">
					<ListItemDeleteIcon
						id="icon-close"
						width={20}
						height={20}></ListItemDeleteIcon>
				</StyledCloseButton>
			</IngredientsListItem>
		</Formik>
	);
};

RecipeingredientsListItem.propType = {
	onButtonDeleteClick: PropTypes.func.isRequired,
	getIngredientName: PropTypes.func.isRequired,
	getIngredientMeasure: PropTypes.func.isRequired,
	item: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	allIngredientsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	getEmptyFieldData: PropTypes.func.isRequired,
};

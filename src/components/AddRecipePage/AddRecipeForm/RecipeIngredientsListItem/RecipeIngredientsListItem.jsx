import { useEffect, useState } from 'react';
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
} from './RecipeIngredientListItem.styled';
import { Icon } from 'components/Icon';

export const RecipeingredientsListItem = ({
	allIngredientsList,
	onButtonDeleteClick,
	item,
	getIngredientName,
	getIngredientMeasure,
}) => {
	const measureOptions = ['lbs', 'tsp', 'g', 'kg'];
	const [ingredientFilter, setIngredientFilter] = useState('');
	const [filteredIngredients, setFiltredIngredients] = useState([]);
	const [ingredientHelpListState, setIngredientHelpListState] =
		useState(false);
	const [measureHelpListState, setMeasureHelpListState] = useState(false);
	const [measure, setMeasure] = useState('');

	useEffect(() => {
		setFiltredIngredients(
			allIngredientsList.filter(({ ttl }) =>
				ttl.toLowerCase().includes(ingredientFilter.toLowerCase())
			)
		); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingredientFilter]);

	useEffect(() => {
		getIngredientName(item.id, {
			ttl: ingredientFilter,
		}); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingredientFilter, item.id]);

	useEffect(() => {
		getIngredientMeasure(
			item.id,
			{
				measure: measure,
			},
			[measure]
		); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [measure, item.id]);

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
		setMeasure(prevState => {
			if (prevState.includes(' ')) {
			const measureValue = prevState.split(' ') 
			return measureValue[0] + ' ' + e.target.textContent;
			}
			return prevState + ' ' + e.target.textContent;
		});
	};

	return (
		<li key={item.id}>
			<StyledIngredientLabel htmlFor="ingredientName">
				<StyledIngredientInput
					name="ingredientName"
					onChange={onIgredientChange}
					value={item.ttl}
					autoComplete="false"></StyledIngredientInput>
				<StyledHelpListShowButton
					type="button"
					onClick={openIngredientHelpList}>
					<Icon
						id="icon-arrow-down"
						width={14}
						height={14}
						stroke="#8BAA36"></Icon>
				</StyledHelpListShowButton>
				{ingredientHelpListState && (
					<DropdownIngredientContainer>
						<DropdownHideButton
							type="button"
							onClick={closeIngredientHelpList}>
							<Icon
								id="icon-arrow-up"
								width={14}
								height={14}
								stroke="#8BAA36"></Icon>
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
				<StyledMeasureInput
					name="measure"
					onChange={onMeasureChange}
					value={item.measure}
					autoComplete="false"></StyledMeasureInput>
				<StyledHelpListShowButton
					type="button"
					onClick={openMeasureHelpList}>
					<Icon
						id="icon-arrow-down"
						width={14}
						height={14}
						stroke="#8BAA36"></Icon>
				</StyledHelpListShowButton>
				{measureHelpListState && (
					<DropdownMeasureContainer>
						<DropdownHideButton
							type="button"
							onClick={closeMeasureHelpList}>
							<Icon
								id="icon-arrow-up"
								width={14}
								height={14}
								stroke="#8BAA36"></Icon>
						</DropdownHideButton>
						<DropdownIngredientUl>
							{measureOptions.map(optionValue => {
								return (
									<li key={uuidv4()}>
										<DropdownListPosition
											type="button"
											onClick={onMeasureHelpListSelect}>
											{optionValue}
										</DropdownListPosition>
									</li>
								);
							})}
						</DropdownIngredientUl>
					</DropdownMeasureContainer>
				)}
			</StyledMeasureLabel>
			<StyledCloseButton
				onClick={onButtonDeleteClick}
				id={item.id}
				type="button">
				<Icon
					id="icon-close"
					width={20}
					height={20}
					stroke="#333333"></Icon>
			</StyledCloseButton>
		</li>
	);
};

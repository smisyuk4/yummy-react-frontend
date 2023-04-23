import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
		setMeasure(prevState => prevState + ' ' + e.target.textContent);
	};

	return (
		<li key={item.id}>
			<label htmlFor="ingredientName">
				<input
					name="ingredientName"
					onChange={onIgredientChange}
					value={item.ttl}
					autoComplete="false"></input>
				<button type="button" onClick={openIngredientHelpList}>
					d
				</button>
				{ingredientHelpListState && (
					<div>
						<button type="button" onClick={closeIngredientHelpList}>
							^
						</button>
						<ul>
							{filteredIngredients.map(({ _id, ttl }) => {
								return (
									<li key={uuidv4()}>
										<button
											id={_id}
											type="button"
											onClick={
												onIngredientsHelpListSelect
											}>
											{ttl}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</label>
			<label htmlFor="measure">
				<input
					name="measure"
					onChange={onMeasureChange}
					value={item.measure}
					autoComplete="false"></input>
				<button type="button" onClick={openMeasureHelpList}>
					d
				</button>
				{measureHelpListState && (
					<div>
						<button type="button" onClick={closeMeasureHelpList}>
							^
						</button>
						<ul>
							{measureOptions.map(optionValue => {
								return (
									<li key={uuidv4()}>
										<button
											type="button"
											onClick={onMeasureHelpListSelect}>
											{optionValue}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</label>
			<button onClick={onButtonDeleteClick} id={item.id}>
				del
			</button>
		</li>
	);
};

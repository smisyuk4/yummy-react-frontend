import { useEffect, useState } from 'react';

export const IngredientsUl = ({
	allIngredientsList,
	addedIngredientsArray,
	onButtonDeleteClick,
}) => {
	const measureOptions = ['lbs', 'tsp', 'g', 'kg'];
	const [ingredientFilter, setIngredientfilter] = useState('');
	const [filteredIngredients, setFiltredIngredients] = useState([]);
	const [helpListState, setHelpListState] = useState(false);

	useEffect(() => {
		setFiltredIngredients(
			allIngredientsList.filter(({ ttl }) =>
				ttl.toLowerCase().includes(ingredientFilter)
			)
		); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingredientFilter]);

	const openHelpList = e => {
		setHelpListState(true);
	};
	const closeHelpList = e => {
		setHelpListState(false);
	};

	const onIgredientChange = e => {
		setIngredientfilter(e.target.value);
	};
	console.log(ingredientFilter);
	return (
		<ul>
			{addedIngredientsArray.map(item => {
				return (
					<li key={item.id}>
						<label htmlFor="ingredientName">
							<input
								name="ingredientName"
								onChange={onIgredientChange}
								value={ingredientFilter}></input>
							<button value={item.id} onClick={openHelpList}>
								d
							</button>
							{helpListState && (
								<div>
									<button onClick={closeHelpList}>^</button>
									<ul>
										{filteredIngredients.map(
											({ _id, ttl }) => {
												return (
													<li>
														<button
															value={{
																id: _id,
																ttl,
															}}>
															{ttl}
														</button>
													</li>
												);
											}
										)}
									</ul>
								</div>
							)}
						</label>
						<label htmlFor="measure">
							<input name="measure"></input>
							<select name="measure" id="maesureSelectList">
								{measureOptions.map(optionValue => {
									return (
										<option value={optionValue}>
											{optionValue}
										</option>
									);
								})}
							</select>
						</label>
						<button onClick={onButtonDeleteClick} value={item.id}>
							del
						</button>
					</li>
				);
			})}
		</ul>
	);
};

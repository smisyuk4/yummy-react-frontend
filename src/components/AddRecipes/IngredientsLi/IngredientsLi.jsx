import { v4 as uuidv4 } from 'uuid';

export const IngredientsLi = ({
	id,
	isMeasureListShown,
	hideMeasureList,
	showMeasureList,
}) => {
	const options = ['lbs', 'tsp', 'g', 'kg'];

	return (
		<li key={id}>
			<label htmlFor="ingredientName">
				<input name="ingredientName"></input>
				<select></select>
				<button onClick={showMeasureList}>d</button>
			</label>
			<label htmlFor="measure">
				<input name="measure"></input>
				{options.map(optionValue => {
					return (
						isMeasureListShown && (
							<div>
								<ul>
									<li key={uuidv4}>
										<button
											type="button"
											value={optionValue}>
											{optionValue}
										</button>
									</li>
								</ul>
								<button onClick={hideMeasureList}>^</button>
							</div>
						)
					);
				})}
				<button>d</button>
			</label>
			<button>del</button>
		</li>
	);
};



export const RecipeIngredientsFieldsCounter = ({
	onDecrementClick,
	onIncrementClick,
	count,
}) => {
	return (
		<div>
			<button onClick={onDecrementClick}>-</button>
			<span>{count}</span>
			<button onClick={onIncrementClick}>+</button>
		</div>
	);
};
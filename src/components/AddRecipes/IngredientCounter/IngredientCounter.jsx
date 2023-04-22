

export const IngredientCounter = ({ onDecrementClick, onIncrementClick, count}) => {
    
    return (
		<div>
			<button onClick={onDecrementClick}>-</button>
			<span>{count}</span>
			<button onClick={onIncrementClick}>+</button>
		</div>
	);
}
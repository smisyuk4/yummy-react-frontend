import PropTypes from 'prop-types';
import {
	CounterButton,
	CounterContainer,
	CounterValue,
	IconMinus,
	IconPlus,
} from './RecipeIngredientsFieldsCounter.styled';

export const RecipeIngredientsFieldsCounter = ({
	onDecrementClick,
	onIncrementClick,
	count,
}) => {
	return (
		<CounterContainer>
			<CounterButton onClick={onDecrementClick}>
				<IconMinus id="icon-minus" width={16} height={16}></IconMinus>
			</CounterButton>
			<CounterValue>{count}</CounterValue>
			<CounterButton onClick={onIncrementClick}>
				<IconPlus id="icon-plus" width={16} height={16}></IconPlus>
			</CounterButton>
		</CounterContainer>
	);
};

RecipeIngredientsFieldsCounter.propType = {
	onDecrementClick: PropTypes.func.isRequired,
	onIncrementClick: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired
}

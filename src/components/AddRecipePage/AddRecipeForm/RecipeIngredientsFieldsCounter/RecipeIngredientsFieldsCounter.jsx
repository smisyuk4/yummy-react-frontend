import { Icon } from "components/Icon";
import { CounterButton, CounterContainer, CounterValue } from "./RecipeIngredientsFieldsCounter.styled";


export const RecipeIngredientsFieldsCounter = ({
	onDecrementClick,
	onIncrementClick,
	count,
}) => {
	return (
		<CounterContainer>
			<CounterButton onClick={onDecrementClick}>
				<Icon
					id="icon-minus"
					width={16}
					height={16}
					stroke="rgba(51, 51, 51, 0.3)"></Icon>
			</CounterButton>
			<CounterValue>{count}</CounterValue>
			<CounterButton onClick={onIncrementClick}>
				<Icon
					id="icon-plus"
					width={16}
					height={16}
					stroke="#8BAA36"></Icon>
			</CounterButton>
		</CounterContainer>
	);
};

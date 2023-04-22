import { SpanMeasure, ItemShoppingList } from "./ShoppingList.styled";

const ShoppingList = () => {
	return (
	<div>
		<ShoppingList>
			<ItemShoppingList>
				<p>Name ingredient</p>
				<SpanMeasure>6 g</SpanMeasure>
				<button>
					remove
				</button>
			</ItemShoppingList>
			<ItemShoppingList>
				<p>Name ingredient</p>
				<SpanMeasure>6 g</SpanMeasure>
				<button>
					remove
				</button>
			</ItemShoppingList>
		</ShoppingList>
	</div>
	)}
export default ShoppingList;
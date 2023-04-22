import { DivContainer, ItemBar, ListBar,  } from "./ShoppingBar.styled";

const ShoppingBar = () => {
	return (
		<DivContainer>
			<ListBar>
				<ItemBar>Prodacts</ItemBar>
				<ItemBar>Number</ItemBar>
				<ItemBar>Remove</ItemBar>
			</ListBar>
		</DivContainer>
	);
};
export default ShoppingBar;

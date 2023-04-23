import { DivContainer, ItemBar, ListBar,  } from "./ShoppingBar.styled";

const ShoppingBar = () => {
	return (
		<DivContainer>
			<ListBar>
				<ItemBar style={{ marginRight: "167px" }}>Prodacts</ItemBar>
				<ItemBar style={{ marginRight: "24px" }}>Number</ItemBar>
				<ItemBar>Remove</ItemBar>
			</ListBar>
		</DivContainer>
	);
};
export default ShoppingBar;

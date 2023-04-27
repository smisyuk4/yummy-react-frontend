import {TitleShoppingList} from './MainPageTitle.styled'
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';
const MainPageTitle = () => {
	return (
		<TitleShoppingList>
			<ReusableComponentTitleWithJewelry title="Shopping list" />
		</TitleShoppingList>
	);
};
export default MainPageTitle;

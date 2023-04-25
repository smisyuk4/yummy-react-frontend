import { OwnRecipes } from 'components/OwnRecipes/OwnRecipes';
import { ReusableComponentTitleWithJewelry } from 'components/ReusableComponentTitleWithJewelry';

const MyRecipesPage = () => {
	return (
		<>
			<ReusableComponentTitleWithJewelry title="My recipes" />
			<OwnRecipes></OwnRecipes>
		</>
	);
};

export default MyRecipesPage;

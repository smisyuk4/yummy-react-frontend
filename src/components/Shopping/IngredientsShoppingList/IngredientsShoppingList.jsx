import { useState, useEffect } from 'react';

import {
	deleteIngredientInShoppingList,
	getShoppingList,
} from '../fetchShoppingList';

import {
	CloseBtn,
	ItemShoppingList,
	ShoppingList,
	ListBar,
	ItemBar,
	CloseIcon,
	TaglineP,
	ContainerImg,
	Measure,
	EmptyList,
	ShopBag,
	ContainerEmpty,
	Total,
	SpanNum,
} from './IngredientsShoppingList.styled';
// import { NavLink, useParams } from 'react-router-dom';

import defaultImage from '../../../images/recipeImg/ingredImage.jpg';
import { ColorRing } from 'react-loader-spinner';

const IngredientsShoppingList = () => {
	const [shoppingList, setShoppingList] = useState([]);
	const [loading, setLoading] = useState(true);
	// const { recipeId } = useParams();

	useEffect(() => {
		getShoppingList()
			.then(({ data }) => setShoppingList(data.shoppingList))
			.catch(error => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	const onDelete = async ingredientId => {
		await deleteIngredientInShoppingList(ingredientId);
		setShoppingList(prevState =>
			prevState.filter(ingredient => ingredient._id !== ingredientId)
		);
	};
	const totalPositionOfIngredients = shoppingList.length;

	// const groupedShoppingList = shoppingList.reduce((acc, curr) => {
	// 	if (!acc[curr.ingredientId]) {
	// 		acc[curr.ingredientId] = { ...curr, measures: [curr.measure] };
	// 	} else {
	// 		acc[curr.ingredientId].measures.push(curr.measure);
	// 	}
	// 	return acc;
	// }, {});

	// const groupedShoppingListArray = Object.values(groupedShoppingList);

	if (loading) {
		return (<ColorRing
		visible={true}
		ariaLabel="blocks-loading"
		wrapperClass="blocks-wrapper"
		colors={['#2a2c36', '#04711a', '#4ebb46', '#8cc293', '#cfd8d4']}
	/>);
	  }

	return (
		<div>
			{totalPositionOfIngredients > 0 && (
				<ListBar>
					<ItemBar>Products</ItemBar>
					<ItemBar>Number</ItemBar>
					<ItemBar>Remove</ItemBar>
				</ListBar>
			)}
			<ShoppingList>
				{totalPositionOfIngredients > 0 &&
					shoppingList.map(({ _id, ttl, thb, measure }) => (
						<ItemShoppingList key={_id}>
							<ContainerImg title={console.log(thb)}>
								<img
									src={thb}
									alt={ttl}
									onError={e => {
										e.target.onerror = null;
										e.target.src = defaultImage;
									}}
								/>
							</ContainerImg>
							<TaglineP>
								{ttl}
								{/* <br />
								<NavLink to={`/recipes/${recipeId}`}>
									From recipe
								</NavLink> */}
							</TaglineP>
							<Measure>{measure}</Measure>
							<CloseBtn
								type="button"
								onClick={() => onDelete(_id)}>
								<CloseIcon id="icon-close" />
							</CloseBtn>
						</ItemShoppingList>
					))}
			</ShoppingList>
			{totalPositionOfIngredients > 0 && <Total>
				Total position: <SpanNum>{totalPositionOfIngredients}</SpanNum>
			</Total>}
			{totalPositionOfIngredients === 0 && (
				<ContainerEmpty>
					<ShopBag id="icon-cart" />
					<EmptyList>Your Shopping List is Empty</EmptyList>
				</ContainerEmpty>
			)}
		</div>
	);
};
// return (
//     <div>
//       {totalPositionOfIngredients > 0 && (
//         <ListBar>
//           <ItemBar>Products</ItemBar>
//           <ItemBar>Number</ItemBar>
//           <ItemBar>Remove</ItemBar>
//         </ListBar>
//       )}
//       {shoppingList.length > 0 ? (
//         <ShoppingList>
//           {shoppingList.map(({ _id, ttl, thb, measure }) => (
//             <ItemShoppingList key={_id}>
//               <ContainerImg title={console.log(thb)}>
//                 <img
//                   src={thb}
//                   alt={ttl}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = defaultImage;
//                   }}
//                 />
//               </ContainerImg>
//               <TaglineP>{ttl} 	{/* <br />
// 								<NavLink to={`/recipes/${recipeId}`}>
// 									From recipe
// 								</NavLink> */}</TaglineP>
//               <Measure>{measure}</Measure>
//               <CloseBtn type="button" onClick={() => onDelete(_id)}>
//                 <CloseIcon id="icon-close" />
//               </CloseBtn>
//             </ItemShoppingList>
//           ))}
//         </ShoppingList>
//       ) : (
//         <ContainerEmpty>
//           <ShopBag id="icon-cart" />
//           <EmptyList>Your Shopping List is Empty</EmptyList>
//         </ContainerEmpty>
//       )}
//       <Total>
//         Total position: <SpanNum>{totalPositionOfIngredients}</SpanNum>
//       </Total>
//     </div>
//   );
// };
export default IngredientsShoppingList;

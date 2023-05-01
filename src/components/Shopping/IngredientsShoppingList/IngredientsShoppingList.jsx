import { useState, useEffect } from 'react';

import {
  deleteAllShoppingList,
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
  ClearBtn,
  ContainerSh,
} from './IngredientsShoppingList.styled';
import { NavLink } from 'react-router-dom';

import defaultImage from '../../../images/recipeImg/ingredImage.jpg';
import { ColorRing } from 'react-loader-spinner';

const IngredientsShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inDelete, setInDelete] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);

  useEffect(() => {
    getShoppingList()
      .then(({ data }) => setShoppingList(data.shoppingList))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onDelete = async ingredientId => {
    setInDelete(prevState => [...prevState, ingredientId]);
    await deleteIngredientInShoppingList(ingredientId);
    setShoppingList(prevState =>
      prevState.filter(ingredient => ingredient._id !== ingredientId)
    );
    setInDelete(prevState =>
      prevState.filter(ingredient => ingredient !== ingredientId)
    );
  };
  const totalPositionOfIngredients = shoppingList.length;

  const deleteAllIngredients = async () => {
    setDeleteAll(true);
    await deleteAllShoppingList();
    setShoppingList([]);
    setDeleteAll(false);
  };

  if (loading) {
    return (
      <ColorRing
        visible={true}
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={['#2a2c36', '#04711a', '#4ebb46', '#8cc293', '#cfd8d4']}
      />
    );
  }

  return (
    <div>
      <ContainerSh>
        {totalPositionOfIngredients > 0 && (
          <ListBar>
            <ItemBar>Products</ItemBar>
            <ItemBar>Number</ItemBar>
            <ItemBar>Remove</ItemBar>
          </ListBar>
        )}
        <ShoppingList>
          {totalPositionOfIngredients > 0 &&
            shoppingList.map(({ _id, ttl, thb, measure, recipeId }) => (
              <ItemShoppingList key={_id}>
                <ContainerImg>
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
                  <br />
                  <NavLink to={`/recipes/${recipeId}`}>From recipe</NavLink>
                </TaglineP>
                <Measure>{measure}</Measure>
                <CloseBtn type="button" onClick={() => onDelete(_id)}>
                  {inDelete.includes(_id) ? (
                    <ColorRing
                      visible={true}
                      ariaLabel="blocks-loading"
                      height={20}
                      width={20}
                      colors={[
                        '#2a2c36',
                        '#04711a',
                        '#4ebb46',
                        '#8cc293',
                        '#cfd8d4',
                      ]}
                    />
                  ) : (
                    <CloseIcon id="icon-close" />
                  )}
                </CloseBtn>
              </ItemShoppingList>
            ))}
        </ShoppingList>
        {totalPositionOfIngredients > 0 && (
          <ClearBtn onClick={() => deleteAllIngredients()}>
            {deleteAll ? (
              <ColorRing
                visible={true}
                ariaLabel="blocks-loading"
                height={20}
                width={80}
                colors={['#2a2c36', '#04711a', '#4ebb46', '#8cc293', '#cfd8d4']}
              />
            ) : (
              'Clear list'
            )}
          </ClearBtn>
        )}
        {totalPositionOfIngredients > 0 && (
          <Total>
            Total position: <SpanNum>{totalPositionOfIngredients}</SpanNum>
          </Total>
        )}
      </ContainerSh>
      {totalPositionOfIngredients === 0 && (
        <ContainerEmpty>
          <ShopBag id="icon-cart" />
          <EmptyList>Your Shopping List is Empty</EmptyList>
        </ContainerEmpty>
      )}
    </div>
  );
};
export default IngredientsShoppingList;

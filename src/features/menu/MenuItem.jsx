import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice.js';
import DeleteItem from '../cart/DeleteItem.jsx';
import UpdateItemQuantity from '../cart/UpdateItemQuantity.jsx';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const itemQuantityInCart = useSelector(getCurrentQuantityById(id));

  function handleAddCart() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {itemQuantityInCart > 0 && (
            <div className="flex items-center justify-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && itemQuantityInCart <= 0 && (
            <Button onClick={handleAddCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

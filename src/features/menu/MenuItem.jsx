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
    <li className="rounded-lg border border-stone-200 bg-white p-4 transition-all duration-300 hover:border-amber-400 dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-400">
      <div className="flex gap-4">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className={`h-24 w-24 rounded-lg object-cover ${
              soldOut ? 'opacity-50 grayscale' : ''
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col">
          {/* Title & Ingredients */}
          <div className="mb-2">
            <h3 className="font-bold text-stone-900 dark:text-white">{name}</h3>
            <p className="text-xs italic text-stone-500 dark:text-stone-400">
              {ingredients.join(', ')}
            </p>
          </div>

          {/* Price & Actions */}
          <div className="mt-auto flex items-center justify-between gap-3">
            {/* Price */}
            <div>
              {!soldOut ? (
                <p className="font-bold text-amber-600 dark:text-amber-400">
                  {formatCurrency(unitPrice)}
                </p>
              ) : (
                <p className="text-xs font-semibold uppercase text-red-500 dark:text-red-400">
                  Sold out
                </p>
              )}
            </div>

            {/* Controls */}
            {itemQuantityInCart > 0 && (
              <div className="flex items-center gap-2">
                <UpdateItemQuantity pizzaId={id} />
                <DeleteItem pizzaId={id} />
              </div>
            )}

            {!soldOut && itemQuantityInCart === 0 && (
              <Button onClick={handleAddCart} type="small">
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

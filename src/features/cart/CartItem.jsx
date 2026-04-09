import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem.jsx';
import UpdateItemQuantity from './UpdateItemQuantity.jsx';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="px-4 py-4 transition-colors hover:bg-stone-100 sm:flex sm:items-center sm:justify-between">
      <div className="mb-3 sm:mb-0">
        <p className="font-semibold text-stone-900">
          {quantity} × {name}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        <p className="text-lg font-bold text-amber-600">
          {formatCurrency(totalPrice)}
        </p>
        <div className="flex items-center gap-3">
          <UpdateItemQuantity pizzaId={pizzaId} />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;

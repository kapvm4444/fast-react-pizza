import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getTotalPizzaCartPrice,
  getTotalPizzaCartQuantity,
} from './cartSlice.js';
import { formatCurrency } from '../../utils/helpers.js';

function CartOverview() {
  const pizzaQuantity = useSelector(getTotalPizzaCartQuantity);
  const pizzaPrice = useSelector(getTotalPizzaCartPrice);

  const cartLength = useSelector((state) => state.cart.cart).length;

  if (cartLength === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm font-semibold text-stone-100 transition-colors duration-300 dark:bg-stone-700 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-200 dark:text-stone-100 sm:space-x-6">
        <span>
          📦 {pizzaQuantity} pizza{pizzaQuantity !== 1 ? 's' : ''}
        </span>
        <span>💰 {formatCurrency(pizzaPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="text-amber-400 transition-colors duration-300 hover:text-amber-300 dark:text-amber-300 dark:hover:text-amber-200"
      >
        Open cart →
      </Link>
    </div>
  );
}

export default CartOverview;

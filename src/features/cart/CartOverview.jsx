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
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaQuantity} pizzas</span>
        <span>{formatCurrency(pizzaPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

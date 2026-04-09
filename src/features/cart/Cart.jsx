import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice.js';
import EmptyCart from './EmptyCart.jsx';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="space-y-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          Your cart, {username}
        </h2>
        <p className="mt-1 text-stone-500 dark:text-stone-400">
          {cart.length} item{cart.length !== 1 ? 's' : ''} in your order
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700">
        <ul className="divide-y divide-stone-200 dark:divide-stone-700">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button to="/order/new" type="primary">
          Proceed to Order
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

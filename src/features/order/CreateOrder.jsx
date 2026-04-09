import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../cart/EmptyCart.jsx';
import store from '../../store.js';
import { clearCart, getTotalPizzaCartPrice } from '../cart/cartSlice.js';
import { formatCurrency } from '../../utils/helpers.js';
import { fetchAddress } from '../user/userSlice.js';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const {
    username,
    status: addressStatus,
    address,
    position,
    error: errorMessage,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const dispatch = useDispatch();

  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector(getTotalPizzaCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white">
          Ready to order? 🎉
        </h2>
        <p className="mt-2 text-stone-500 dark:text-stone-400">
          Fill in your details to complete your order
        </p>
      </div>

      <Form method="POST" className="space-y-6">
        {/* Form Section */}
        <div className="space-y-5 rounded-lg border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
          {/* Customer Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              First Name
            </label>
            <input
              className="input"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              Phone Number
            </label>
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-1 rounded-md bg-red-100 p-3 text-xs text-red-700 dark:bg-red-900 dark:text-red-200">
                ⚠️ {formErrors.phone}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-stone-700 dark:text-stone-300">
              Address
            </label>
            <div className="relative">
              <input
                className="input w-full"
                type="text"
                name="address"
                defaultValue={address}
                required
              />
              {!position.latitude && !position.longitude && (
                <Button
                  type="small"
                  disabled={isLoadingAddress}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                  className="absolute right-2 top-2"
                >
                  📍 Get Position
                </Button>
              )}
            </div>
            {addressStatus === 'error' && (
              <p className="mt-1 rounded-md bg-red-100 p-3 text-xs text-red-700 dark:bg-red-900 dark:text-red-200">
                ⚠️ {errorMessage}
              </p>
            )}
          </div>

          {/* Priority Checkbox */}
          <div className="flex items-center gap-3 border-t border-stone-200 py-4 dark:border-stone-700">
            <input
              className="h-5 w-5 cursor-pointer rounded accent-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-300"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label
              htmlFor="priority"
              className="cursor-pointer font-medium text-stone-700 dark:text-stone-300"
            >
              🚀 Give your order priority for faster delivery
              {withPriority && (
                <span className="ml-2 font-bold text-amber-600 dark:text-amber-400">
                  (+{formatCurrency(priorityPrice)})
                </span>
              )}
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-stone-700 dark:bg-stone-900">
          <div className="space-y-3">
            <div className="flex justify-between text-stone-700 dark:text-stone-300">
              <span>Subtotal:</span>
              <span>{formatCurrency(totalCartPrice)}</span>
            </div>
            {withPriority && (
              <div className="flex justify-between text-stone-700 dark:text-stone-300">
                <span>Priority fee (20%):</span>
                <span>{formatCurrency(priorityPrice)}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-amber-200 pt-3 text-lg font-bold text-stone-900 dark:border-stone-700 dark:text-white">
              <span>Total:</span>
              <span className="text-amber-600 dark:text-amber-400">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
        </div>

        {/* Hidden Inputs */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          {/* Submit Button */}
          <Button
            disabled={isSubmitting || isLoadingAddress}
            type="primary"
            className="w-full"
          >
            {isSubmitting && isLoadingAddress
              ? '⏳ Placing your order...'
              : `✓ Place Order`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // do not overuse
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

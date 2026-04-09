// Test ID: IIDSAT

import OrderItem from './OrderItem';

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder.jsx';

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-stone-900">Order #{id}</h1>

        <div className="flex flex-wrap gap-3">
          {priority && (
            <span className="inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
              🚀 Priority
            </span>
          )}
          <span className="inline-block rounded-full bg-green-500 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
            ✓ {status}
          </span>
        </div>
      </div>

      {/* Delivery Status */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5">
        <p className="mb-2 text-lg font-semibold text-stone-900">
          {deliveryIn >= 0
            ? `🚚 Only ${deliveryIn} minutes left!`
            : '✓ Order delivered'}
        </p>
        <p className="text-sm text-stone-600">
          Estimated delivery:{' '}
          <span className="font-medium">{formatDate(estimatedDelivery)}</span>
        </p>
      </div>

      {/* Order Items */}
      <div className="overflow-hidden rounded-lg border border-stone-200">
        <ul className="divide-y divide-stone-200">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetcher.state === 'loading'}
              ingredients={
                fetcher?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </ul>
      </div>

      {/* Price Summary */}
      <div className="space-y-3 rounded-lg border border-stone-200 bg-stone-100 px-6 py-5">
        <div className="flex justify-between text-stone-700">
          <span>Pizza subtotal:</span>
          <span className="font-semibold">{formatCurrency(orderPrice)}</span>
        </div>
        {priority && (
          <div className="flex justify-between text-stone-700">
            <span>Priority fee (20%):</span>
            <span className="font-semibold text-red-600">
              {formatCurrency(priorityPrice)}
            </span>
          </div>
        )}
        <div className="flex justify-between border-t border-stone-300 pt-3 text-lg font-bold text-stone-900">
          <span>Total to pay on delivery:</span>
          <span className="text-amber-600">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </div>
      </div>

      {/* Update Priority Option */}
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;

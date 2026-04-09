import React from 'react';
import Button from '../../ui/Button.jsx';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant.js';

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method={'patch'} className="text-center">
      <Button type={'primary'}>🚀 Make Priority (+20%)</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

import React from 'react';
import Button from '../../ui/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice.js';

export default function UpdateItemQuantity({ pizzaId }) {
  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  const dispatch = useDispatch();

  return (
    <div className={'flex items-center gap-2 md:gap-3'}>
      <Button
        type={'round'}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        −
      </Button>
      <span className="w-6 text-center font-bold text-stone-900 dark:text-stone-100">
        {quantity}
      </span>
      <Button
        type={'round'}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

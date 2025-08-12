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
    <div className={'flex items-center gap-1 md:gap-3'}>
      <Button
        type={'round'}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      {quantity}
      <Button
        type={'round'}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

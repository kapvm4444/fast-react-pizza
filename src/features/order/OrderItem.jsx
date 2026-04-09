import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-2 px-4 py-4 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800">
      <div className="flex items-center justify-between gap-4">
        <p className="text-stone-900 dark:text-white">
          <span className="font-bold text-amber-600 dark:text-amber-400">
            {quantity}×
          </span>{' '}
          {name}
        </p>
        <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-sm italic text-stone-600 dark:text-stone-400">
        {isLoadingIngredients ? (
          <span className="animate-pulse">Loading ingredients...</span>
        ) : (
          ingredients.join(', ')
        )}
      </p>
    </li>
  );
}

export default OrderItem;

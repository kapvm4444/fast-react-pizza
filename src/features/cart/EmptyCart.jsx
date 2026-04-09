import LinkButton from '../../ui/LinkButton.jsx';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-16">
      <div className="text-6xl">🛒</div>

      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          Your cart is empty
        </h2>
        <p className="text-stone-600">
          Start adding some delicious pizzas to your order!
        </p>
      </div>

      <LinkButton to="/menu">← Back to menu</LinkButton>
    </div>
  );
}

export default EmptyCart;

import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button.jsx';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-12 px-4 text-center sm:my-20 md:my-24">
      <div className="mb-12 inline-block">
        <p className="animate-bounce text-5xl sm:text-6xl md:text-7xl">🍕</p>
      </div>

      <h1 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
        The best pizza.
      </h1>
      <p className="mb-10 text-lg font-semibold text-amber-600 sm:text-xl">
        Straight out of the oven, straight to you.
      </p>

      <p className="mx-auto mb-10 max-w-md text-stone-600">
        Experience the finest freshly baked pizzas delivered to your doorstep.
        Quality, speed, and taste guaranteed.
      </p>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to={'/menu'} type={'primary'}>
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

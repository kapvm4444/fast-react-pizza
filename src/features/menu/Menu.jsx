import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-stone-900 dark:text-white">
        Our Menu
      </h1>
      <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

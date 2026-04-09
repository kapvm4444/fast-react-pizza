import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-stone-900 transition-colors hover:text-amber-600"
        >
          <span className="text-2xl">🍕</span>
          <span className="hidden sm:inline">Fast React Pizza</span>
        </Link>

        <SearchOrder />

        <Username />
      </div>
    </header>
  );
}

export default Header;

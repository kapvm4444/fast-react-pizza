import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/theme/themeSlice.js';

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className="border-b border-stone-200 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-4 transition-colors duration-300 dark:border-stone-700 dark:from-stone-900 dark:to-stone-800 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-widest text-stone-900 transition-colors hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
        >
          <span className="text-2xl">🍕</span>
          <span className="hidden sm:inline">Fast React Pizza</span>
        </Link>

        <SearchOrder />

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-stone-800 transition-colors duration-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-stone-800 dark:text-amber-400 dark:hover:bg-stone-700 dark:focus:ring-amber-300"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <Username />
        </div>
      </div>
    </header>
  );
}

export default Header;

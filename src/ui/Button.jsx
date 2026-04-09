import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  const styles = {
    primary:
      base +
      ' bg-amber-500 text-stone-900 hover:bg-amber-600 focus:ring-amber-400 px-5 py-3 md:px-7 md:py-4 font-bold dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300 dark:focus:ring-amber-300',
    small:
      base +
      ' bg-amber-500 text-stone-900 hover:bg-amber-600 focus:ring-amber-400 px-4 py-2 md:px-5 md:py-2.5 text-xs dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300 dark:focus:ring-amber-300',
    secondary:
      base +
      ' border-2 border-stone-300 text-stone-700 hover:bg-stone-100 focus:ring-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800 dark:focus:ring-stone-600',
    round:
      base +
      ' bg-amber-500 text-stone-900 hover:bg-amber-600 focus:ring-amber-400 px-2.5 py-1 md:px-3.5 md:py-2 text-sm dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300 dark:focus:ring-amber-300',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

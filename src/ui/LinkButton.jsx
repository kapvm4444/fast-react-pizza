import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

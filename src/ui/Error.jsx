import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="text-6xl">😢</div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-stone-900">
          Something went wrong!
        </h1>
        <p className="max-w-md text-lg text-stone-600">
          {error.data ||
            error.message ||
            'An unexpected error occurred. Please try again.'}
        </p>
      </div>

      <LinkButton to="-1">← Go back</LinkButton>
    </div>
  );
}

export default Error;

import { PropsWithChildren, ReactElement } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

function FallbackErrorMessage({ resetErrorBoundary }: FallbackProps): ReactElement {
  return (
    <div className="flex flex-col items-center space-y-4 my-10">
      <h3 className="text-xl">Something went wrong.</h3>
      <div className="items-center">
        <button
          className="px-6 py-2 max-w-[120px] text-center border border-gray-200 rounded hover:bg-gray-200 focus:outline-none focus:ring"
          onClick={() => resetErrorBoundary()}
        >Try again</button>
      </div>
    </div>
  );
}

export function ErrorHandler({ children }: PropsWithChildren): ReactElement {
  return (
    <ErrorBoundary
      onError={(error: Error) => console.info(error.message)}
      FallbackComponent={FallbackErrorMessage}
    >
      { children }
    </ErrorBoundary>
  );
};
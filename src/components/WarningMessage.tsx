import { PropsWithChildren, ReactElement } from 'react';

export function WarningMessage({ children }: PropsWithChildren): ReactElement {
  return (
    <p className="text-md text-gray-600" role="alert" aria-live="polite">
      { children }
    </p>
  );
}
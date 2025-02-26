import { ReactElement } from 'react';

import { BolButtonProps } from '../interfaces';

export function Button({ onButtonClick, ariaLabel, children }: BolButtonProps ): ReactElement {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      className="w-full mt-4 p-2 bg-bolblue text-white cursor-pointer rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
import { ReactElement } from 'react';

export function NoCategoriesMessage(): ReactElement {
  return (
    <p className="text-md text-gray-600" role="alert" aria-live="polite">
      No categories found <span role="img" aria-label="shrugging emoji">🤷‍♂️</span>
    </p>
  );
}
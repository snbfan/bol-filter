import { ReactElement } from 'react';

import { BolCategoryItemProps } from '../interfaces';

export function CategoryItem({ item, onCategorySelect }: BolCategoryItemProps): ReactElement {
  return (
    <div role="listitem" className="flex items-center space-x-2">
      <input
        id={`category-${item.name}`}
        type="checkbox"
        checked={item.favorite}
        onChange={() => onCategorySelect(item.name)}
        className="w-4 h-4 text-bolblue border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        aria-checked={item.favorite}
      />
      <label
        htmlFor={`category-${item.name}`}
        className={`cursor-pointer ${item.favorite ? 'text-bolblue' : 'text-gray-700'}`}
      >
        {item.name}
      </label>
    </div>
  );
}

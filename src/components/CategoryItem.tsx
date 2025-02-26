import { useDispatch } from 'react-redux';
import { ReactElement, useCallback } from 'react';

import { BolSearchCategory } from '../interfaces';
import { categoriesSlice } from '../redux';

export function CategoryItem({ item }: { item: BolSearchCategory }): ReactElement {
  const dispatch = useDispatch();

  const toggleFavorite = useCallback(() => {
    dispatch(categoriesSlice.actions.toggleFavorite({ name: item.name }));
  }, [dispatch, item.name]);

  return (
    <div role="listitem" className="flex items-center space-x-2">
      <input
        id={`category-${item.name}`}
        type="checkbox"
        checked={item.favorite}
        onChange={toggleFavorite}
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

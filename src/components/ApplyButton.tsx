import { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { categoriesSlice, filtersSlice } from '../redux';
import { AppDispatch } from '../redux/types';

export function ApplyButton(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();

  const saveFilters = useCallback(() => {
    dispatch(categoriesSlice.actions.saveSelectedCategories());
    dispatch(filtersSlice.actions.setNameFilter(''));
  }, [dispatch])

  return (
    <button
      type="button"
      onClick={saveFilters}
      className="w-full mt-4 p-2 bg-bolblue text-white cursor-pointer rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      aria-label="Filters toepassen"
    >
      Toepassen
    </button>
  );
}
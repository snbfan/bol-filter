import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtersSlice } from '../redux';
import { RootState } from '../redux/types';

export function CategoriesFilter(): ReactElement {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.filters.value);

  const updateName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersSlice.actions.setNameFilter({ name: e.target.value.trim() }));
  }, [dispatch]);

  return (
    <div className="relative mt-3 mb-4">
      <label htmlFor="categories-filter-input" className="sr-only">Zoek op categories</label>
      <input
        id="categories-filter-input"
        type="text"
        placeholder="Zoek op ..."
        value={name || ''}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        onChange={updateName}
        aria-label="Zoek op categories"
      />
      <span className="absolute right-3 top-3 text-gray-500" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.8 12.2l-3.9-4c.6-.8 1.1-2 1.1-3.1 0-2.8-2.3-5-5-5-2.8 0-5 2.3-5 5 0 2.8 2.2 5 5 5 .8 0 1.7-.2 2.3-.5l3.9 4.3c.2.2.6.2.8 0l.8-.8c.3-.3.3-.7 0-.9zM6 8.1c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3z"
            fill="currentColor"
          />
        </svg>
      </span>
    </div>
  );
}

import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon } from './SearchIcon';

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
        <SearchIcon />
      </span>
    </div>
  );
}

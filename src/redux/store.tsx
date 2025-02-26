import { configureStore } from '@reduxjs/toolkit'

import { categoriesSlice } from './categoriesSlice';
import { filtersSlice } from './filtersSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    filters: filtersSlice.reducer
  },
});
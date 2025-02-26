import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { BolSearchCategory } from '../interfaces';
import { localStorageKey, fetchFilterCategories } from './utils';

const initialState: { value: BolSearchCategory[] } = { value: [] };

export const fetchCategories = createAsyncThunk('items/fetchCategories', fetchFilterCategories)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = state.value.find((item) => item.name === action.payload.name);
      if (item) {
        item.favorite = !item.favorite;
      }
    },
    saveSelectedCategories: (state) => {
      localStorage.setItem(localStorageKey, JSON.stringify(state.value));
      window.location.reload();
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => void(state.value = action.payload))
  },
})

import { createSlice } from '@reduxjs/toolkit'
import { FiltersValue } from '../interfaces';

const initialState: { value: FiltersValue } = { value: { name: '' } };

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.value.name = action.payload.name;
    },
  },
})

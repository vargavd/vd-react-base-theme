// redux imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// data imports
import { LocationTerm } from '../../../data';



const getTaxonomyFilterSlice = (
  sliceName: string,
  addReducerName: string,
  removeReducerName: string
) =>
  createSlice({
    name: sliceName,
    initialState: [] as LocationTerm[],
    reducers: {
      [addReducerName]: (state, action: PayloadAction<LocationTerm>) => {
        state.push(action.payload);
      },
      [removeReducerName]: (state, action: PayloadAction<LocationTerm>) => {
        const index = state.findIndex(item => item.id === action.payload.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    },
  });


export default getTaxonomyFilterSlice;
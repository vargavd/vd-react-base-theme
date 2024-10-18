// redux imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const getTaxonomyFilterSlice = (
  sliceName: string,
  addReducerName: string,
  removeReducerName: string
) =>
  createSlice({
    name: sliceName,
    initialState: [] as string[],
    reducers: {
      [addReducerName]: (state, action: PayloadAction<string>) => {
        state.push(action.payload);
      },
      [removeReducerName]: (state, action: PayloadAction<string>) => {
        const index = state.indexOf(action.payload);

        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    },
  });


export default getTaxonomyFilterSlice;
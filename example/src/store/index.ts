// redux imports
import { configureStore } from '@reduxjs/toolkit'

// slices imports
import selectedTaxonomyAReducer from './slices/SelectedTaxonomyASlice';
import selectedTaxonomyBReducer from './slices/SelectedTaxonomyBSlice';
import selectedTaxonomyCReducer from './slices/SelectedTaxonomyCSlice';
import selectedTaxonomyDReducer from './slices/SelectedTaxonomyDSlice';
import { locationApiSlice } from './slices/LocationsSlice';

export const store = configureStore({
  reducer: {
    selectedTaxonomyA: selectedTaxonomyAReducer,
    selectedTaxonomyB: selectedTaxonomyBReducer,
    selectedTaxonomyC: selectedTaxonomyCReducer,
    selectedTaxonomyD: selectedTaxonomyDReducer,
    [locationApiSlice.reducerPath]: locationApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
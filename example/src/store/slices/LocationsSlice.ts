// redux imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// type import
import type { LocationFromRestApi, LocationInfo } from '../../data';


// Define an API service using a base URL
export const locationApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${vdReactBaseInfos.baseUrl}/wp-json/wp/v2/location` }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: ({
        taxonomy_A_terms,
        taxonomy_B_terms,
        taxonomy_C_terms,
        taxonomy_D_terms
      }: {
        taxonomy_A_terms: string[],
        taxonomy_B_terms: string[],
        taxonomy_C_terms: string[],
        taxonomy_D_terms: string[]
      }) => {
        const urlParams: string[] = [];

        if (taxonomy_A_terms.length > 0) {
          urlParams.push(`location_taxonomy_A=${taxonomy_A_terms.join(',')}`);
        }

        if (taxonomy_B_terms.length > 0) {
          urlParams.push(`location_taxonomy_B=${taxonomy_B_terms.join(',')}`);
        }

        if (taxonomy_C_terms.length > 0) {
          urlParams.push(`location_taxonomy_C=${taxonomy_C_terms.join(',')}`);
        }

        if (taxonomy_D_terms.length > 0) {
          urlParams.push(`location_taxonomy_D=${taxonomy_D_terms.join(',')}`);
        }

        if (!urlParams.length) {
          return '';
        }

        return `?${urlParams.join('&')}`;
      }
    }),
  }),
});

export const { useGetLocationsQuery } = locationApiSlice;

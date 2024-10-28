// redux imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// data imports
import { LocationFromRestApi, LocationTerm } from '../../data';

// Define an API service using a base URL
export const locationApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${vdReactBaseInfos.baseUrl}/wp-json/wp/v2/location` }),
  endpoints: (builder) => ({
    getLocations: builder.query<LocationFromRestApi[], {
      taxonomy_A_terms: LocationTerm[],
      taxonomy_B_terms: LocationTerm[],
      taxonomy_C_terms: LocationTerm[],
      taxonomy_D_terms: LocationTerm[]
    }>({
      query: ({
        taxonomy_A_terms,
        taxonomy_B_terms,
        taxonomy_C_terms,
        taxonomy_D_terms
      }) => {
        const urlParams = ['_embed=wp:term', 'tax_relation=OR'];

        if (taxonomy_A_terms.length > 0) {
          urlParams.push(`location_taxonomy_A=${taxonomy_A_terms.map(t => t.id).join(',')}`);
        }

        if (taxonomy_B_terms.length > 0) {
          urlParams.push(`location_taxonomy_B=${taxonomy_B_terms.map(t => t.id).join(',')}`);
        }

        if (taxonomy_C_terms.length > 0) {
          urlParams.push(`location_taxonomy_C=${taxonomy_C_terms.map(t => t.id).join(',')}`);
        }

        if (taxonomy_D_terms.length > 0) {
          urlParams.push(`location_taxonomy_D=${taxonomy_D_terms.map(t => t.id).join(',')}`);
        }

        return `?${urlParams.join('&')}`;
      }
    }),
  }),
});

export const { useGetLocationsQuery } = locationApiSlice;

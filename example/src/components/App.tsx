// react imports
import * as React from "react";

// redux imports
import { useSelector } from "react-redux";
import { RootState } from "../store";

// custom components
import Header from "./header/Header";
import Map from "./map/Map";
import { useGetLocationsQuery } from "../store/slices/LocationsSlice";


const App: React.FC = () => {
  const selectedTaxonomyAFilters = useSelector((state: RootState) => state.selectedTaxonomyA);
  const selectedTaxonomyBFilters = useSelector((state: RootState) => state.selectedTaxonomyB);
  const selectedTaxonomyCFilters = useSelector((state: RootState) => state.selectedTaxonomyC);
  const selectedTaxonomyDFilters = useSelector((state: RootState) => state.selectedTaxonomyD);

  const { data: posts, error, isLoading } = useGetLocationsQuery({
    taxonomy_A_terms: selectedTaxonomyAFilters,
    taxonomy_B_terms: selectedTaxonomyBFilters,
    taxonomy_C_terms: selectedTaxonomyCFilters,
    taxonomy_D_terms: selectedTaxonomyDFilters
  });

  console.log(posts, isLoading);

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default App;

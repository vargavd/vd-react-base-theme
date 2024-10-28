// react imports
import { useMemo, useState } from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// redux imports
import { useGetLocationsQuery } from "../store/slices/LocationsSlice";

// custom components
import Header from "./header/Header";
import Map from "./map/Map";
import ImportLocationsPopup from "./import-locations-popup/ImportLocationsPopup";
import { LocationFromRestApi, LocationTerm } from "../data";


const App: React.FC = () => {
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);

  const { data: allLocations, error, isLoading: locationsLoading } = useGetLocationsQuery({
    taxonomy_A_terms: [],
    taxonomy_B_terms: [],
    taxonomy_C_terms: [],
    taxonomy_D_terms: []
  });

  if (!locationsLoading && firstTimeLoad) {
    setFirstTimeLoad(false);
  }

  const get_getAllTermsForTaxonomy = (taxonomy: string) => () => {
    if (!allLocations?.length) return [];

    const allTerms = allLocations?.map(
      (location: LocationFromRestApi) => {
        const termsForThisLocation = [] as LocationTerm[];

        location._embedded['wp:term'].map((taxonomyTerms) => {
          termsForThisLocation.push(...taxonomyTerms);
        });

        return termsForThisLocation;
      }
    ).flat(1).filter((term: any) => term.taxonomy === taxonomy);

    const uniqueTerms = allTerms.filter((term: any, index: number, self: any) =>
      index === self.findIndex((t: any) => (
        t.id === term.id
      ))
    );

    return uniqueTerms;
  }

  const taxonomyATerms = useMemo(get_getAllTermsForTaxonomy('location_taxonomy_A'), [allLocations?.length]);

  const taxonomyBTerms = useMemo(get_getAllTermsForTaxonomy('location_taxonomy_B'), [allLocations?.length]);

  const taxonomyCTerms = useMemo(get_getAllTermsForTaxonomy('location_taxonomy_C'), [allLocations?.length]);

  const taxonomyDTerms = useMemo(get_getAllTermsForTaxonomy('location_taxonomy_D'), [allLocations?.length]);

  return (
    <>
      {/* LOADING LOCATIONS */}
      {firstTimeLoad && (
        <FontAwesomeIcon
          icon={faSpinner}
          size="2xl"
          style={{ margin: '45vh auto 0', display: 'block' }}
          spin
        />
      )}

      {/* THERE ARE NO LOCATIONS */}
      {!firstTimeLoad && !allLocations?.length && (
        <ImportLocationsPopup />
      )}

      {/* LOCATIONS LOADED */}
      {!firstTimeLoad && !!allLocations?.length && (
        <>
          <Header
            taxonomyATerms={taxonomyATerms}
            taxonomyBTerms={taxonomyBTerms}
            taxonomyCTerms={taxonomyCTerms}
            taxonomyDTerms={taxonomyDTerms}
          />
          <Map />
        </>
      )}
    </>
  );
};

export default App;

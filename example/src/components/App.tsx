// react imports
import { useState } from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// redux imports
import { useGetLocationsQuery } from "../store/slices/LocationsSlice";

// custom components
import Header from "./header/Header";
import Map from "./map/Map";
import ImportLocationsPopup from "./import-locations-popup/ImportLocationsPopup";


const App: React.FC = () => {
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);

  const { data: locations, error, isLoading: locationsLoading } = useGetLocationsQuery({
    taxonomy_A_terms: [],
    taxonomy_B_terms: [],
    taxonomy_C_terms: [],
    taxonomy_D_terms: []
  });

  if (!locationsLoading && firstTimeLoad) {
    setFirstTimeLoad(false);
  }

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
      {!firstTimeLoad && !locations?.length && (
        <ImportLocationsPopup />
      )}

      {/* LOCATIONS LOADED */}
      {!firstTimeLoad && !!locations?.length && (
        <>
          <Header />
          <Map />
        </>
      )}
    </>
  );
};

export default App;

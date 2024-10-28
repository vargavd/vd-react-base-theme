// react imports
import { useState, useEffect } from "react";

// store imports
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useGetLocationsQuery } from "../../store/slices/LocationsSlice";

// markers data imports
import { locationInfos } from "../../data";

// styles
import "./Map.scss";

declare var mapboxgl: any;

const Map: React.FC = () => {
  const [mapboxMap, setMapboxMap] = useState(null);
  const [markers, setMarkers] = useState(null);

  const selectedTaxonomyAFilters = useSelector((state: RootState) => state.selectedTaxonomyA);
  const selectedTaxonomyBFilters = useSelector((state: RootState) => state.selectedTaxonomyB);
  const selectedTaxonomyCFilters = useSelector((state: RootState) => state.selectedTaxonomyC);
  const selectedTaxonomyDFilters = useSelector((state: RootState) => state.selectedTaxonomyD);

  const { data: filteredLocations, error, isLoading: locationsLoading } = useGetLocationsQuery({
    taxonomy_A_terms: selectedTaxonomyAFilters,
    taxonomy_B_terms: selectedTaxonomyBFilters,
    taxonomy_C_terms: selectedTaxonomyCFilters,
    taxonomy_D_terms: selectedTaxonomyDFilters
  });

  // load mapbox
  useEffect(() => {
    mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 1,
      center: [30, 15],
      pitchWithRotate: false,
      dragRotate: false,
      touchZoomRotate: false
    });

    map.addControl(new mapboxgl.NavigationControl());
    // map.scrollZoom.disable();

    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });

    setMapboxMap(map);
  }, []);

  // set markers
  useEffect(() => {
    if (!mapboxMap || !filteredLocations.length) return;

    if (markers) {
      markers.forEach((marker: any) => marker.remove());
    }

    const newMarkers: any[] = [];

    filteredLocations.forEach((location) => {
      const popup = new mapboxgl.Popup({ offset: 30 }).setText(
        `${location.title.rendered}: ${location.content.rendered}`
      );

      newMarkers.push(
        new mapboxgl.Marker()
          .setLngLat([location._longitude, location._latitude])
          .setPopup(popup)
          .addTo(mapboxMap)
      );
    });

    setMarkers(newMarkers);
    console.log(newMarkers.length);
  }, [mapboxMap, filteredLocations.length]);


  return (
    <div id="map">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ul>
          {selectedTaxonomyAFilters.map((term) => (
            <li key={term.id} id={term.id.toString()}>{term.name}</li>
          ))}
        </ul>

        <ul>
          {selectedTaxonomyBFilters.map((term) => (
            <li key={term.id} id={term.id.toString()}>{term.name}</li>
          ))}
        </ul>

        <ul>
          {selectedTaxonomyCFilters.map((term) => (
            <li key={term.id} id={term.id.toString()}>{term.name}</li>
          ))}
        </ul>

        <ul>
          {selectedTaxonomyDFilters.map((term) => (
            <li key={term.id} id={term.id.toString()}>{term.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;

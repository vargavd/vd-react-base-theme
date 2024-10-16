// react imports
import { useEffect } from "react";

// styles
import "./Map.scss";

declare var mapboxgl: any;

const Map: React.FC = () => {

  useEffect(() => {
    mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';

    const map = new mapboxgl.Map({
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
  }, []);

  return (
    <div id="map">
      Map Placeholder
    </div>
  );
};

export default Map;

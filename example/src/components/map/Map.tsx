// react imports
import { useEffect } from "react";

// markers data imports
import { locationInfos } from "../../data";

// styles
import "./Map.scss";

declare var mapboxgl: any;

const Map: React.FC = () => {
  const markers = locationInfos.map(li => ({ lngLat: [li.lng, li.lat], title: li.title, text: li.text }));

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

    markers.slice(0, 10).forEach((marker) => {
      const popup = new mapboxgl.Popup({ offset: 30 }).setText(
        `${marker.title}: ${marker.text}`
      );

      new mapboxgl.Marker()
        .setLngLat(marker.lngLat)
        .setPopup(popup)
        .addTo(map);
    });
  }, []);

  return (
    <div id="map">
      Map Placeholder
    </div>
  );
};

export default Map;

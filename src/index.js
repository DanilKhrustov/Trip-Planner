console.log('hello there');

const mapboxgl = require("mapbox-gl");
const mapbox = require('./markers')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGE4a2lsbyIsImEiOiJjanQ0aWlnNjIxbXNvM3lsajhtbmo4eHZpIn0.VsrFSJB-VgWRg4BSifFfWQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map)

const marker = mapbox("hotel", [-87.6354, 41.8885]); // or [-87.6354, 41.8885]
marker.addTo(map);
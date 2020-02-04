import './App.css';
import MapContainer from "./components/MapContainer";
import { GoogleApiWrapper } from 'google-maps-react';

const googleApiWrapper = GoogleApiWrapper({
  apiKey: "AIzaSyDXHPmA0Jxx0Xj7P-HINX7Adzb5Bm-3u0k"
})(MapContainer);

export default googleApiWrapper;
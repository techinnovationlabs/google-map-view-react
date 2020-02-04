import './App.css';
import MapContainer from "./components/MapContainer";
import { GoogleApiWrapper } from 'google-maps-react';

const googleApiWrapper = GoogleApiWrapper({
  apiKey: "Insert your own Google API Key here"
})(MapContainer);

export default googleApiWrapper;

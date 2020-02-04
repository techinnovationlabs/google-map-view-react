import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                { latitude: 34.990047, longitude: -81.057399 },
                { latitude: 35.031523, longitude: -81.071132 },
                { latitude: 35.055231, longitude: -81.095642 },
                { latitude: 35.983421, longitude: -81.046723 },
                { latitude: 35.023134, longitude: -81.065421 },
                { latitude: 35.012352, longitude: -81.086532 }
            ]
        };
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                    onClick={() => console.log("Map marker clicked")}
                />
            );
        });
    };

    render() {
        const mapStyles = {
            width: "100%",
            height: "100%"
        };

        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 34.99, lng: -81.01 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default MapContainer;
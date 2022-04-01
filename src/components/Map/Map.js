import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import MapStyles from './MapStyles';

const libraries = ["places"];
const mapContainerStyle = {
    height: '25vh',
    width: '100%',
    borderRadius: 5,
};
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

function Map({ lat, lng }) {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const center2 = {
        lat: 59.65916,
        lng: 18.91605
    };
    const center = {
        lat: {lat},
        lng: {lng},
    };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
            >
                <Marker 
                    position={center2}
                />
            </GoogleMap>
        </div>
    )
}

export default Map

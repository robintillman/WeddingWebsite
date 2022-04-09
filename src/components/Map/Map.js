import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import MapStyles from './MapStyles';

function Map(props) {
    var center ={
        lat: parseFloat(props.lat),
        lng: parseFloat(props.lng)
    };
    const dinnerPartyPosition ={
        lat: 59.65916,
        lng: 18.91605
    };
    const marriagePosition ={
        lat: 59.75945,
        lng: 18.70582
    };
    const mapContainerStyle = {
        width: '100%',
        height: '25vh',
        borderRadius: 5
    };
    const options = {
        styles: MapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map..";
    
    return <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
    >
        <Marker
            position={dinnerPartyPosition}
            title="Middag & Fest - Fursund Värdhus" 
            icon={{
                url: "/wedding-cake.svg",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
            }}
        />
        <Marker 
            position={marriagePosition}
            title="Vigsel - Norrtälje Kyrka" 
            icon={{
                url: "/wedding-ring.svg",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
            }}
        />
    </GoogleMap>
}

export default Map

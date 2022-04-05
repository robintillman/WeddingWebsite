import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import MapStyles from './MapStyles';

function Map(props) {
    var center ={
        lat: parseFloat(props.lat),
        lng: parseFloat(props.lng)
    }
    var dinnerPartyCenter ={
        lat: 59.65916,
        lng: 18.91605
    }
    var marriageCenter ={
        lat: 59.75945,
        lng: 18.70582
    }
    
    const mapContainerStyle = {
        width: '100%',
        height: '25vh'
    }
    
    const options = {
        styles: MapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true
    }
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAXT0mf4LRpg1Juw5aQaticCTb2dqkbnI0",
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map..";
    
    return <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
    >
        <Marker position={dinnerPartyCenter} title="Middag & Fest - Fursund Värdhus" />
        <Marker position={marriageCenter} title="Vigsel - Norrtälje Kyrka"  />
    </GoogleMap>
}

export default Map

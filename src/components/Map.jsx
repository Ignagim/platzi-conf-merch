import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
    const mapStyle= {
        height: "50vh",
        width: "100%",
    }

    const defaultCenter = {
        lat: parseFloat(data.lat), lng: parseFloat(data.lng)
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyAoaCrV9CVGkuyGcSfGaBHQSBPyn9B6JEo'>
            <GoogleMap 
                mapContainerStyle={mapStyle}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}
 
export default Map
'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';


import { toast } from 'react-toastify';

const CommunityMap = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA1zkTKA6IHfGKfbI3E3CukUOgI-eYPARk"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                error => {
                    toast.error('Error getting current location:', error);
                }
            );
        } else {
            toast.error('Geolocation is not supported by this browser.');
        }
        setMap(map);
    }, [])

    const onUnmount = useCallback(() => { setMap(null) }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName='w-full h-[75vh] rounded-md shadow-md'
            center={currentLocation}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {currentLocation && <Marker position={currentLocation} title="You're here" />}
            <></>
        </GoogleMap>
    ) : <></>
}

export default memo(CommunityMap)
// export default MapWithCurrentLocation;

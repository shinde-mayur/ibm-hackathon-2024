'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useCallback, useState } from 'react';

const CommunityMap = ({ markers, currentLocation, onMapLoad }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA1zkTKA6IHfGKfbI3E3CukUOgI-eYPARk"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {
        onMapLoad(map)
        setMap(map);
    }, [])

    const onUnmount = useCallback(() => { setMap(null) }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName='w-full h-[40vh] rounded-md shadow-md'
            center={currentLocation}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {currentLocation && <Marker position={currentLocation} title="You're here" />}
            {markers.map((m, i) => (
                <Marker
                    key={i}
                    position={{ lat: m.latitude, lng: m.longitude }}
                    title={`Found ${m.user_count} people near you`}
                />
            )
            )}
            <></>
        </GoogleMap>
    ) : <></>
}

export default memo(CommunityMap)

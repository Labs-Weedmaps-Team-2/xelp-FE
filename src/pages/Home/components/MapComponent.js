import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []); return { ...position, error };
}
const positions = [
  { lat: 39.7384, lng: -105.0521 },
  { lat: 39.7487, lng: -105.0518 },
  { lat: 39.7389, lng: -105.0541 },
  { lat: 39.7367, lng: -105.0211 }
]
const MapComponent = (props) => {
  const { latitude, longitude } = usePosition();
  console.log('Location: ', latitude, longitude)
  return (
    <div>
      {latitude ?
        <Map
          google={props.google}
          zoom={12}
          style={{ width: '100%', height: '300px' }}
          initialCenter={{ lat: latitude, lng: longitude }}>
          {positions.map(position =>
            <Marker position={position} key={`${position.lon}+${position.lat}`} />)}
        </Map> : null}
    </div>
  )
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_MAPS_API_KEY })(MapComponent)

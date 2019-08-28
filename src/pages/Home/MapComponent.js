import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const MapComponent = (props) => {
  console.log(process.env.REACT_APP_MAPS_API_KEY)
  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        style={{ width: '50%', height: '300px' }}
        initialCenter={{ lat: 39.7392, lng: -104.9903 }}>
        <Marker position={{ lat: 39.7387, lng: -105.0511 }} />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_MAPS_API_KEY })(MapComponent)

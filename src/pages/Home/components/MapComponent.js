import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { useSelector } from 'react-redux'

// const positions = business.businessess.map(business => business.coordinates)
const MapComponent = props => {
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)
  console.log('BUSINESS', business)
  console.log('POSITIONS', positions)
  console.log(
    business.region &&
      business.region.center &&
      business.region.center.latitude,
    business.region &&
      business.region.center &&
      business.region.center.longitude
  )
  return (
    <div style={{ width: '100%', height: '550px' }}>
      {business && business.region.center && business.region.center.latitude ? (
        <Map
          google={props.google}
          zoom={15}
          style={{
            width: '680px',
            height: '500px',
            border: '1px solid #e6e6e6',
          }}
          initialCenter={{
            lat: business.region.center.latitude,
            lng: business.region.center.longitude,
          }}
        >
          {positions.map(position => (
            <Marker
              position={position}
              key={`${position.latitude}+${position.longitude}`}
              text={<div>Here</div>}
            />
          ))}
        </Map>
      ) : null}
    </div>
  )
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_MAPS_API_KEY })(
  MapComponent
)

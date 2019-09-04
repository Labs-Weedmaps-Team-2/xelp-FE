import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { useSelector } from 'react-redux'

// const positions = business.businessess.map(business => business.coordinates)
const MapComponent = props => {
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)
  console.log('BUSINESS', business)
  console.log('POSITIONS', positions)

  return (
    <div style={{ height: '550px' }}>
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
              style={{ border: '1px solid red' }}
              position={{ lat: position.latitude, lng: position.longitude }}
              key={`${position.latitude}+${position.longitude}`}
              name='Your position'
              icon={{
                url:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIK18JIYJFPTqF6qNZpyUEkTTglR1AcIU_-kX8-MPuSqoBpPZ',
                anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(64, 64),
              }}
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

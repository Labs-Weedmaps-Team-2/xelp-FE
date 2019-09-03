import React, { useEffect } from 'react'
import GoogleMap from 'google-map-react'
import { useSelector } from 'react-redux'
import facebookSvg from 'assets/svg/facebook.svg'
// const positions = business.businessess.map(business => business.coordinates)
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
    }}
  >
    <img style={{ width: '100%' }} src={facebookSvg} alt='marker' />
  </div>
)

export const Map = props => {
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)

  console.log('stuff', business.region)

  return (
    // Important! Always set the container height explicitly */}
    <div style={{ height: '500px', width: '680px' }}>
      {business.region &&
      business.region.center &&
      business.region.center.longitude ? (
        <GoogleMap
          style={{
            height: '500px',
            width: '680px',
            position: 'relative',
          }}
          className='google-map-react'
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={{
            lat: business.region.center.latitude,
            lng: business.region.center.longitude,
          }}
          defaultZoom={10}
        >
          {positions.map((position, index) => {
            return (
              <AnyReactComponent
                key={index}
                lat={position.latitude}
                lng={position.longitude}
                text='here'
              />
            )
          })}
        </GoogleMap>
      ) : null}
    </div>
  )
}

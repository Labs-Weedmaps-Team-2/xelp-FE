import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import MarkerSvg from 'assets/svg/MarkerSvg'
import styled from 'styled-components'
// const positions = business.businessess.map(business => business.coordinates)
const Marker = props => {
  return (
    <StyledMarker>
      <MarkerSvg className='marker-svg' color='red' />
    </StyledMarker>
  )
}

export const Map = props => {
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)

  return (
    // Important! Always set the container height explicitly */}
    <Container>
      {business.region.center && business.region.center.longitude ? (
        <GoogleMapReact
          className='google-map-react'
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={[50.01038826014866, -118.6525866875]}
          defaultZoom={10}
          center={[
            business.region.center.latitude,
            business.region.center.longitude,
          ]}
          zoom={10}
        >
          {positions.map((position, index) => {
            return (
              <Marker
                key={index}
                lat={position.latitude}
                lng={position.longitude}
                business={business.businesses[index]}
              />
            )
          })}
        </GoogleMapReact>
      ) : null}
    </Container>
  )
}

const StyledMarker = styled.div`
  position: 'relative';
  width: 35px;
  height: 35px;
  color: red;

  .marker-svg {
    width: 100%;
    color: red;
  }
`
const Container = styled.div`
  height: 500px;
  width: 680px;
`

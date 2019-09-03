import React from 'react'
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import { useSelector } from 'react-redux'
import MarkerSvg from 'assets/svg/MarkerSvg'
import styled from 'styled-components'
// const positions = business.businessess.map(business => business.coordinates)
const Marker = props => {
  return (
    <StyledMarker>
      <MarkerSvg className='marker-svg' color='darkred' />
    </StyledMarker>
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
const losAngeles = [34.0522, 118.2437]
const cityLevel = 10

export const Map = props => {
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)
  const getBounds = positions => {
    const latitudes = positions.map(position => position.latitude)
    const longitudes = positions.map(position => position.longitude)
    const maxLat = Math.max(...latitudes)
    const minLat = Math.min(...latitudes)
    const maxLng = Math.max(...longitudes)
    const minLng = Math.min(...longitudes)

    const bounds = {
      ne: {
        lat: maxLat,
        lng: maxLng,
      },
      sw: {
        lat: minLat,
        lng: minLng,
      },
    }
    return bounds
  }

  const bounds = getBounds(positions)
  const size = {
    width: 680, // Map width in pixels
    height: 500, // Map height in pixels
  }

  const { center, zoom } = fitBounds(bounds, size)

  return (
    // Important! Always set the container height explicitly */}
    <Container>
      {business.region.center && business.region.center.longitude ? (
        <GoogleMapReact
          className='google-map-react'
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={losAngeles}
          defaultZoom={cityLevel}
          center={center}
          zoom={zoom}
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

const Container = styled.div`
  height: 500px;
  width: 680px;
`

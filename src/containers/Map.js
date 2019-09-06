import React from 'react'
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import { useSelector, useDispatch } from 'react-redux'
import { getBounds } from 'utils'
import { Marker } from 'components'
import styled from 'styled-components'

const losAngelesCoords = [34.0522, 118.2437]
const cityLevel = 10
const mapSize = {
  height: 500, // Map height in pixels
  width: 670, // Map width in pixels
}

export const Map = props => {
  const dispatch = useDispatch()
  const business = useSelector(({ business }) => business)
  const positions = business.businesses.map(business => business.coordinates)

  const bounds = getBounds(positions)

  const { center, zoom } = fitBounds(bounds, mapSize)

  return (
    // Important! Always set the container height explicitly */}
    <Container>
      {positions.length ? (
        <GoogleMapReact
          className='google-map-react'
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={losAngelesCoords}
          defaultZoom={cityLevel}
          center={center}
          zoom={zoom}
          onChange={props => console.log('props', props)}
        >
          {positions.map((position, index) => {
            return (
              <Marker
                key={index}
                id={index + props.offset + 1}
                lat={position.latitude}
                lng={position.longitude}
                item={business.businesses[index]}
                color='darkred'
              />
            )
          })}
        </GoogleMapReact>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  height: ${mapSize.height}px;
  width: ${mapSize.width}px;
`

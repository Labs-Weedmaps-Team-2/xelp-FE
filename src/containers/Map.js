import React from 'react'
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusiness, setMap, setMapUpdate, setSearch } from 'actions'
import axios from 'axios'
import { getBounds, convertZoomToMeters } from 'utils'
import { Marker } from 'components'
import styled from 'styled-components'
const openCageUrl = 'https://api.opencagedata.com/geocode/v1/json'

const losAngelesCoords = [34.0522, 118.2437]
const cityLevel = 10 // 20 world, 15 continent, 10 city, 5 street-level, 1 building-level
const mapSize = {
  height: 500, // Map height in pixels
  width: 670, // Map width in pixels
}

const formatLocal = local => {
  if (local) {
    local = local.concat(', ')
  } else {
    local = ''
  }
  return local
}

export const Map = props => {
  const { listIndex } = props
  const dispatch = useDispatch()
  const [business, search, map, update] = useSelector(
    ({ business, search, map, update }) => [business, search, map, update]
  )
  const positions = business.businesses.map(business => business.coordinates)

  if (update) {
    const bounds = getBounds(positions)
    var { center, zoom } = fitBounds(bounds, mapSize)
  }

  const handleMapChange = async props => {
    const { lat, lng } = props.center
    let location
    if (lat && lng) {
      const res = await axios.get(
        `${openCageUrl}?q=${lat},${lng}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
      )
      const { town, city, state_code } = res.data.results[0].components
      let local = town || city
      local = formatLocal(local)
      location = `${local}${state_code}`
    }
    dispatch(setMap(props.center, props.zoom, location))
    if (!update) {
      await dispatch(
        fetchBusiness(
          search.term,
          `${props.center.lat}, ${props.center.lng}`,
          0,
          search.categories,
          search.open_now,
          search.price,
          convertZoomToMeters(map.zoom)
        )
      )
      dispatch(setSearch(search.term, search.location, 0))
    }
    dispatch(setMapUpdate())
  }

  return (
    // Important! Always set the container height explicitly */}
    <Container>
      {positions.length ? (
        <GoogleMapReact
          className='google-map-react'
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={losAngelesCoords}
          defaultZoom={cityLevel}
          center={center && center.lat ? center : map.center}
          zoom={center && center.lat ? zoom : map.zoom}
          onChange={handleMapChange}
        >
          {positions.map((position, index) => {
            return (
              <Marker
                key={index}
                id={index + props.offset + 1}
                lat={position.latitude}
                lng={position.longitude}
                item={business.businesses[index]}
                color='#D32322'
                listHover={index === listIndex}
              />
            )
          })}
        </GoogleMapReact>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  /* border: 1px solid red; */
  position: sticky;
  top: 90px;
  height: ${mapSize.height}px;
  width: ${mapSize.width}px;
`

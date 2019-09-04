import React from 'react'
import styled from 'styled-components'
import MarkerSvg from 'assets/svg/MarkerSvg'

export const Marker = ({ color, item, id }) => {
  return (
    <StyledMarker>
      <MarkerSvg className='marker-svg' color={color} />
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

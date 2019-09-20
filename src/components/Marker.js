import React from 'react'
import styled from 'styled-components'
import MarkerSvg from 'assets/svg/MarkerSvg'
import { useRouter } from 'hooks'

export const Marker = ({ $hover, color, item, id }) => {
  const { history } = useRouter()
  const hoverColor = $hover ? 'blue' : color

  return (
    <StyledMarker
      hover={$hover}
      onClick={() => history.push(`/business/${item.id}`)}
    >
      <span>{id}</span>
      <MarkerSvg className='marker-svg' color={hoverColor} />
    </StyledMarker>
  )
}

const StyledMarker = styled.div`
  /* border: 1px solid blue; */
  position: absolute;
  transform: translate(-50%, -50%)
    ${props => (props.hover ? 'scale(1.2)' : null)};
  z-index: ${props => (props.hover ? 10 : null)};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;
  span {
    position: absolute;
    font-weight: bold;
    font-size: 12px;
    color: white;
    top: 11px;
  }
  .marker-svg {
    color: red;
  }
`

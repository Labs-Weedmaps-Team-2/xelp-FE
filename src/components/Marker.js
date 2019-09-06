import React from 'react'
import styled from 'styled-components'
import Marker2Svg from 'assets/svg/Marker2Svg'
import { useRouter } from 'hooks'

export const Marker = ({ $hover, color, item, id }) => {
  const { history } = useRouter()
  const hoverColor = $hover ? 'blue' : color

  return (
    <StyledMarker
      hover={$hover}
      color={hoverColor}
      onClick={() => history.push(`/business/${item.id}`)}
    >
      <span>{id}</span>
      <Marker2Svg className='marker-svg' color={hoverColor} />
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
    color: ${props => props.color};
    top: 8px;
  }
`

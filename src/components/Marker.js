import React from 'react'
import styled from 'styled-components'
import MarkerSvg from 'assets/svg/MarkerSvg'
import { useRouter } from 'hooks'

export const Marker = ({ $hover, color, item, id, listHover }) => {
  const { history } = useRouter()
  const hoverColor = $hover || listHover ? 'blue' : color
  console.log(item, 'item')
  return (
    <StyledMarker
      hover={$hover}
      onClick={() => history.push(`/business/${item.id}`)}
    >
      <span>{id}</span>
      <MarkerSvg className='marker-svg' color={hoverColor} />
      <div className='hover-popup'>
        <div
          style={{ width: 120, marginLeft: 8, marginTop: 5, paddingBottom: 10 }}
        >
          <h2
            style={{
              marginBottom: 5,
              fontSize: 12,
              color: 'dodgerblue',
              fontWeight: 'bold',
            }}
          >
            {item.name}
          </h2>
          <address>
            {item &&
              item.location &&
              item.location.display_address.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </address>
        </div>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '6px',
            }}
            src={item.image_url}
            alt='business'
          />
        </div>
      </div>
    </StyledMarker>
  )
}

const StyledMarker = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  transform: translate(-50%, -50%)
    ${props => (props.hover ? 'scale(1.2)' : null)};
  z-index: ${props => (props.hover ? 10 : null)};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;
  span {
    position: absolute;
    font-weight: bold;
    font-size: 10px;
    color: white;
    top: 5px;
  }
  .marker-svg {
    color: red;
  }
  .hover-popup {
    opacity: ${props => (props.hover ? 1 : 0)};
    position: relative;
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    min-width: 200px;
    top: -60px;
    left: -40px;
    background: white;
    transition: all 0.3s ease;
    border-radius: 8px;
    border: 1px solid rgb(207, 207, 205);
  }
`

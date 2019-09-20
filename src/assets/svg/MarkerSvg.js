import React from 'react'

const MarkerSvg = ({ color }) => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='map-marker'
      class='svg-inline--fa fa-map-marker fa-w-12'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 384 512'
      style={{
        position: 'fixed',
        zIndex: -1,
        color,
        width: '100%',
        height: '100%',
      }}
    >
      <path
        fill='currentColor'
        d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'
      ></path>
    </svg>
  )
}

export default MarkerSvg

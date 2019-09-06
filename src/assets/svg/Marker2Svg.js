import React from 'react'

const Marker2Svg = ({ color }) => {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='30.000000pt'
      height='30.000000pt'
      viewBox='0 0 344.000000 344.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform='translate(0.000000,344.000000) scale(0.100000,-0.100000)'
        fill={color || 'black'}
        stroke='none'
      >
        <path
          d='M1625 3364 c-257 -38 -462 -140 -641 -318 -340 -341 -410 -785 -215
-1374 107 -325 270 -647 512 -1009 114 -171 328 -459 398 -536 82 -89 98 -83
232 88 235 300 457 637 605 920 450 859 456 1474 20 1911 -152 151 -313 243
-521 295 -78 20 -317 34 -390 23z m414 -173 c136 -45 256 -112 356 -198 104
-90 160 -164 226 -298 77 -157 92 -229 93 -425 1 -172 -6 -228 -51 -405 -117
-455 -453 -1059 -899 -1614 -9 -10 -210 255 -344 454 -154 229 -211 325 -320
540 -137 271 -230 526 -277 760 -27 137 -24 403 5 510 27 98 105 259 166 341
99 135 289 268 471 330 113 38 160 43 330 39 136 -3 159 -6 244 -34z'
        />
        {/* <path
          d='M1631 2664 c-132 -35 -240 -128 -304 -262 -34 -71 -40 -94 -45 -170
-8 -146 43 -276 147 -375 268 -256 691 -135 796 228 13 44 16 81 13 147 -5 76
-11 99 -45 170 -86 179 -244 279 -438 277 -38 0 -94 -7 -124 -15z m256 -145
c80 -30 162 -112 192 -194 31 -81 27 -199 -8 -265 -68 -131 -175 -200 -311
-200 -136 0 -243 69 -311 200 -35 66 -39 184 -8 265 64 173 266 260 446 194z'
        /> */}
      </g>
    </svg>
  )
}

export default Marker2Svg

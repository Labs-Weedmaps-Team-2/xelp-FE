import React from 'react'
import rating_0 from 'assets/img/rating_0.png'
import rating_1 from 'assets/img/rating_1.png'
import rating_1_5 from 'assets/img/rating_1_5.png'
import rating_2 from 'assets/img/rating_2.png'
import rating_2_5 from 'assets/img/rating_2_5.png'
import rating_3 from 'assets/img/rating_3.png'
import rating_3_5 from 'assets/img/rating_3_5.png'
import rating_4 from 'assets/img/rating_4.png'
import rating_4_5 from 'assets/img/rating_4_5.png'
import rating_5 from 'assets/img/rating_5.png'

import styled from 'styled-components'

export const renderRating = rating => {
  switch (rating) {
    case 5:
      return <Img src={rating_5} alt='' />
    case 4.5:
      return <Img src={rating_4_5} alt='' />
    case 4:
      return <Img src={rating_4} alt='' />
    case 3.5:
      return <Img src={rating_3_5} alt='' />
    case 3.0:
      return <Img src={rating_3} alt='' />
    case 2.5:
      return <Img src={rating_2_5} alt='' />
    case 2:
      return <Img src={rating_2} alt='' />
    case 1.5:
      return <Img src={rating_1_5} alt='' />
    case 1.0:
      return <Img src={rating_1} alt='' />
    case 0:
      return <Img src={rating_0} alt='' />
    // TODO: throw an actual error
    default:
      throw new Error('renderRating error')
  }
}

const Img = styled.img`
  width: 100%;
`

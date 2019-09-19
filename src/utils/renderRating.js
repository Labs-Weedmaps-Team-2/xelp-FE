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
  const num_rat = Number(rating)
  if (num_rat >= 5) {
    return <Img src={rating_5} alt='' />
  } else if (num_rat >= 4.5 && num_rat < 5) {
    return <Img src={rating_4_5} alt='' />
  } else if (num_rat >= 4.0 && num_rat < 4.5) {
    return <Img src={rating_4} alt='' />
  } else if (num_rat >= 3.5 && num_rat < 4.0) {
    return <Img src={rating_3_5} alt='' />
  } else if (num_rat >= 3.0 && num_rat < 3.5) {
    return <Img src={rating_3} alt='' />
  } else if (num_rat >= 2.5 && num_rat < 3.0) {
    return <Img src={rating_2_5} alt='' />
  } else if (num_rat >= 2.0 && num_rat < 2.5) {
    return <Img src={rating_2} alt='' />
  } else if (num_rat >= 1.5 && num_rat < 2.0) {
    return <Img src={rating_1_5} alt='' />
  } else if (num_rat >= 1.0 && num_rat < 1.5) {
    return <Img src={rating_1} alt='' />
  } else {
    return <Img src={rating_0} alt='' />
  }
}

const Img = styled.img`
  width: 100%;
`

import React from 'react'
import styled from 'styled-components'

const ReviewCard = ({id, text, business}) => {
  return (
    <StyledReviewCard>
      {id}
      {text}
      {business.city}
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  width: 30%;
  border: 1px solid blue;
  
`
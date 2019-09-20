import React from 'react'
import styled from 'styled-components'
import { renderRating } from 'utils'
const ReviewCard = ({
  text,
  business,
  rating,
  image_url,
  img_url,
  photos,
  user,
  avatar,
}) => {
  return (
    <StyledReviewCard>
      <p className='business-name'>{business.name}</p>
      <div className='img-container'>
        <img src={image_url || img_url || business.photo} alt={business.name} />
      </div>
      <p className='text'>{text}</p>
      <div style={{ width: '150px' }}>
        <p className='rating'>{renderRating(rating)}</p>
      </div>
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  width: 20%;
  height: 250px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  background: white;
  .business-name {
    font-size: 2rem;
    text-align: center;
  }
  .img-container {
    width: 38%;
    img {
      width: 100%;
    }
  }
  .text {
    text-align: center;
    overflow: hidden;
  }
`

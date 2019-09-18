import React from 'react'
import styled from 'styled-components'

const ReviewCard = ({ text, business, rating }) => {
  return (
    <StyledReviewCard>
      <p className="business-name">{business.name}</p>
      <div className="img-container">
        <img src={business.photo} alt={business.name} />
      </div>
      <p className="text">{text}</p>
      <p className="rating">Rating: {rating}</p>
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
    width:38%;
    img{
      width: 100%;
    }
  }
  .text {
    text-align: center;
    overflow: hidden;
  }
`
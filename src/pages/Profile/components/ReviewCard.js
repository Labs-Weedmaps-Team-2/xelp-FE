import React from 'react'
import styled from 'styled-components'
import { renderRating } from 'utils'
import { Link } from 'react-router-dom'
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
      <Link to={`/business/${business.yelp_id}`}>
        <p className='business-name'>{business.name}</p>
        <div className='img-container'>
          <img
            src={image_url || img_url || business.photo}
            alt={business.name}
          />
        </div>
        {/* <p className='text'>{text}</p> */}
        <div style={{ width: '120px', marginTop: '15px' }}>
          <p className='rating'>{renderRating(rating)}</p>
        </div>
      </Link>
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  height: 250px;
  width: 250px;
  transition: all 0.4s ease-in-out;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  a {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
  }

  .business-name {
    font-size: 2rem;
    margin: 15px 0px;
    text-align: center;
  }
  .img-container {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    img {
      width: 100%;
      border-radius: 4px;
      height: 100%;
      object-fit: center;
      object-position: cover;
    }
  }
  .text {
    text-align: center;
    overflow: hidden;
  }
`

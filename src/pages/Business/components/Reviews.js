import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { renderRating } from 'utils'
const Reviews = ({ reviews }) => {
  return (
    <Container>
      {reviews.map(review => {
        return (
          <div className='review-item' key={review.id}>
            <div className='review-author'>
              <div className='author-wrapper'>
                <img
                  className='author-image'
                  src={
                    review.user.image_url ||
                    review.user.avatar ||
                    review.user.photo
                  }
                  alt='user'
                />
              </div>
              <a
                className='author-name'
                href={`https://www.yelp.com/user_details?userid=${review.user.id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {review.user.name || review.user.username}
              </a>
            </div>
            <div className='review-content'>
              <div className='review-meta'>
                <div className='rating-wrapper'>
                  {renderRating(review.rating)}
                </div>
                <span className='review-created'>
                  {moment(review.time_created).format('M/D/YYYY')}
                </span>
              </div>
              <p className='review-text'>{review.text}</p>
            </div>
          </div>
        )
      })}
    </Container>
  )
}

export default Reviews

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .review-item {
    /* border: 1px solid green; */
    display: flex;
    border-bottom: 1px solid #e6e6e6;
  }
  .review-author {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    width: 120px;
    padding: 15px;
  }
  .author-wrapper {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
  .author-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .author-name {
    color: #0073bb;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.4px;
  }
  .review-content {
    /* border: 1px solid blue; */
    width: 600px;
    padding: 20px 20px 20px 10px;
  }
  .review-meta {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .rating-wrapper {
    margin-right: 10px;
    height: 18px;
    width: 105px;
  }
  .review-text {
    line-height: 20px;
    letter-spacing: 0.8px;
  }
`
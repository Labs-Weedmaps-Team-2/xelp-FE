import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { api } from 'apis'
import { useRouter } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setReview, deleteReview } from 'actions'

import { renderRating } from 'utils'
const Reviews = ({ reviews, yelp_id }) => {
  const { history, location } = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  const setCurrentReview = review => {
    if (user) {
      dispatch(setReview(review))
      history.push(`/review/${location.pathname.split('/business/')[1]}`)
    }
  }

  const handleDelete = id => {
    api.delete(`/reviews/${id}`).then(res => {
      dispatch(deleteReview(id))
      console.log(res)
    })
  }
  return (
    <Container>
      {reviews &&
        reviews.map(review => {
          return (
            <div className='review-item' key={review.id}>
              <div className='review-author'>
                <div className='author-wrapper'>
                  <img
                    className='author-image'
                    src={
                      review.user.image_url ||
                      review.user.avatar ||
                      review.avatar ||
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='review-content'>
                  <div className='review-meta'>
                    {console.log(review.rating)}
                    <div className='rating-wrapper'>
                      {renderRating(review.rating)}
                    </div>
                    <span className='review-created'>
                      {moment(review.time_created).format('M/D/YYYY')}
                    </span>
                  </div>
                  <p className='review-text'>{review.text}</p>
                  {user.id === review.user.id && (
                    <div className='button-container'>
                      <i
                        className='fas fa-pen'
                        onClick={() => setCurrentReview(review)}
                      ></i>
                      <i
                        className='fas fa-trash'
                        onClick={() => handleDelete(review.id)}
                      ></i>
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex' }}>
                  {review.photos &&
                    review.photos.map((photo, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            width: '200px',
                            height: '200px',
                            marginRight: '20px',
                            marginBottom: '20px',
                          }}
                        >
                          <img
                            src={photo}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                            alt='review'
                          />
                        </div>
                      )
                    })}
                </div>
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
  .button-container {
    display: flex;
    justify-content: flex-end;
    i {
      margin-right: 20px;
      font-size: 1.8rem;
      padding: 2px;
      cursor: pointer;
    }
  }
`

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchBusinessDetails,
  resetSingleBusiness,
  resetReview,
} from 'actions'
import { renderRating } from 'utils'
import { Navbar } from 'components'
import styled from 'styled-components'
import AddPhotos from './ReviewPhotosInput'

const textHash = {
  '1': 'Eek! Methinks not.',
  '2': "Meh. I've experienced better.",
  '3': 'A-OK.',
  '4': "Yay! I'm a fan.",
  '5': 'Woohoo! As good as it gets!',
}

const ReviewForm = () => {
  const dispatch = useDispatch()
  const business = useSelector(({ singleBusiness }) => singleBusiness)
  const review = useSelector(({ review }) => review)
  const editing = review.id ? true : false
  const [reviewText, setReviewText] = useState(review.text)
  const [rateValue, setRateValue] = useState(review.rating)
  const [rateText, setRateText] = useState('Select your rating')
  const yelp_id = window.location.pathname.split('/review/')[1]
  useEffect(() => {
    dispatch(fetchBusinessDetails(yelp_id))
    return () => {
      dispatch(resetSingleBusiness())
      dispatch(resetReview())
    }
  }, [dispatch, yelp_id])

  const handleInput = e => {
    setReviewText(e.target.value)
  }

  const handleClick = e => {
    setRateValue(Number(e.target.value))
    setRateText(textHash[e.target.value])
  }
  return (
    <>
      <div>
        <Navbar />
        <StyledForm>
          <Link to={`/business/${business.id}`}>
            <h2>{business.name}</h2>
          </Link>
          <div className='radio-textarea'>
            <div className='rating-bar'>{renderRating(rateValue)}</div>
            <div className='radio-wrapper'>
              <label htmlFor='1'>1</label>
              <input
                id='1'
                type='radio'
                name='rating'
                value='1'
                onClick={handleClick}
                defaultChecked
              />
              <label htmlFor='2'>2</label>
              <input
                id='2'
                type='radio'
                name='rating'
                value='2'
                onClick={handleClick}
              />
              <label htmlFor='3'>3</label>
              <input
                id='3'
                type='radio'
                name='rating'
                value='3'
                onClick={handleClick}
              />
              <label htmlFor='4'>4</label>
              <input
                id='4'
                type='radio'
                name='rating'
                value='4'
                onClick={handleClick}
              />
              <label htmlFor='5'>5</label>
              <input
                id='5'
                type='radio'
                name='rating'
                value='5'
                onClick={handleClick}
              />
              <span className='rate-text'>{rateText}</span>
            </div>
            <textarea
              className='review-text'
              onChange={handleInput}
              value={reviewText}
              placeholder='Your review helps others learn about great local businesses.'
            />
          </div>
          <AddPhotos
            text={reviewText}
            rating={rateValue}
            yelp_id={yelp_id}
            id={review.id}
            editing={editing}
          />
        </StyledForm>
      </div>
    </>
  )
}

export default ReviewForm

const StyledForm = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin-left: 240px;
  h2 {
    color: #0073bb;
    font-size: 36px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .rating-bar {
    width: 200px;
    position: relative;
    top: 25px;
  }
  label {
    padding: 15px;
    margin-right: 1px;
    opacity: 0;
  }
  .rate-text {
    margin-left: 20px;
  }

  .radio-textarea {
    display: flex;
    flex-direction: column;
    width: 625px;
    position: relative;
  }
  .radio-wrapper {
    position: relative;
    margin: 0 0 20px;
    input {
      display: none;
    }
  }
  .review-text {
    padding: 18px;
    margin-bottom: 25px;
    resize: none;
    border-radius: 4px;
    border: 1px solid #cccccc;
    width: 625px;
    height: 384px;
    outline: none;
    font-size: 18px;
  }

  .btn-submit {
    width: 240px;
    height: 48px;
    padding: 10px 13px;
    background: #d32323;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    margin-bottom: 20px;
  }
  .preview-container {
    display: flex;
  }

  .preview-wrap {
    width: 200px;
    height: 200px;
  }

  .preview-img {
    width: 100%;
    height: 100%;
    object-fit: center;
    object-position: center;
  }
`

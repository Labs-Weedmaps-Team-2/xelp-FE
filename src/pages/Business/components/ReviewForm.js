import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { api } from 'apis'
import { useRouter } from 'hooks'
import { fetchBusinessDetails, resetSingleBusiness } from 'actions'
import { renderRating } from 'utils'
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
  const { location, history } = useRouter()

  const [reviewText, setReviewText] = useState('')
  const [rateValue, setRateValue] = useState(1)
  const [rateText, setRateText] = useState('Select your rating')
  const [uploadStatus, setUploadStatus] = useState(false)
  const yelp_id = window.location.pathname.split('/writeareview/')[1]
  useEffect(() => {
    dispatch(fetchBusinessDetails(yelp_id))
    return () => {
      dispatch(resetSingleBusiness())
    }
  }, [])

  const handleSubmit = e => {
    // e.preventDefault()
    // api
    //   .post(`/business/${yelp_id}/review`, {
    //     review: {
    //       text: reviewText,
    //       rating: rateValue,
    //     },
    //   })
    //   .then(res => {
    //     dispatch({ type: 'ADD_REVIEW', payload: res.data })
    //     setReviewText('')
    //     history.push(`/business/${yelp_id}`)
    //   })
    setUploadStatus(true)
  }
  const handleInput = e => {
    setReviewText(e.target.value)
  }

  const handleClick = e => {
    setRateValue(Number(e.target.value))
    setRateText(textHash[e.target.value])
  }
  return (
    <div>
      <AddPhotos
        text={reviewText}
        rating={rateValue}
        yelp_id={yelp_id}
        uploadStatus={uploadStatus}
      />
      <Form onSubmit={handleSubmit}>
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
        <button className='btn-submit'>Submit</button>
      </Form>
    </div>
  )
}

export default ReviewForm

const Form = styled.form`
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
  input {
    display: none;
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
`

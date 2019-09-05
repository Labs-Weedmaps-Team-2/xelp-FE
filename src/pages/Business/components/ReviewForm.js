import React, { useState } from 'react'
import { api } from 'apis'
import { useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'

const ReviewForm = () => {
  const dispatch = useDispatch()
  const { history } = useRouter()

  const [reviewText, setReviewText] = useState('')
  const [rateValue, setRateValue] = useState(null)
  const handleSubmit = e => {
    e.preventDefault()
    api
      .post(`/review/${window.location.pathname.split('/writeareview/')[1]}`, {
        review: {
          text: reviewText,
          rating: rateValue,
        },
      })
      .then(res => {
        console.log('handle submit', res)
        dispatch({ type: 'ADD_REVIEW', payload: res.data })
        setReviewText('')
        history.push(
          `/business/${window.location.pathname.split('/writeareview/')[1]}`
        )
      })
  }
  const handleInput = event => {
    setReviewText(event.target.value)
  }
  const handleClick = e => {
    setRateValue(Number(e.target.value))
  }
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={e => handleSubmit(e)}
    >
      <label>Review</label>
      <input
        type='radio'
        name='rating'
        value='1'
        onClick={e => handleClick(e)}
      />
      <input
        type='radio'
        name='rating'
        value='2'
        onClick={e => handleClick(e)}
      />
      <input
        type='radio'
        name='rating'
        value='3'
        onClick={e => handleClick(e)}
      />
      <input
        type='radio'
        name='rating'
        value='4'
        onClick={e => handleClick(e)}
      />
      <input
        type='radio'
        name='rating'
        value='5'
        onClick={e => handleClick(e)}
      />
      <textarea onChange={e => handleInput(e)} value={reviewText} />
      <button type='submit' />
    </form>
  )
}

export default ReviewForm

import React, { useState } from 'react'
import { api } from 'apis'
import { useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
const ReviewForm = () => {
  const dispatch = useDispatch()
  const { history } = useRouter()

  const [reviewText, setReviewText] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    api
      .post(`/review/${window.location.pathname.split('/writeareview/')[1]}`, {
        review: {
          text: reviewText,
          rating: 3,
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
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>Review</label>
      <input onChange={e => handleInput(e)} value={reviewText} />
    </form>
  )
}

export default ReviewForm

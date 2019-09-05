import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'
import { useForm } from 'hooks'
import { api } from 'apis'
const Business = () => {
  // var { location } = useRouter()
  const location = window.location
  const dispatch = useDispatch()
  const [reviewText, setReviewText] = useState('')

  const business = useSelector(({ singleBusiness }) => singleBusiness)
  console.log('business', business)
  const handleInput = event => {
    setReviewText(event.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    // handle axios call here
    api
      .post(`/review/${window.location.pathname.split('/business/')[1]}`, {
        value: reviewText,
        review: {
          name: business.name,
          text: reviewText,
        },
      })
      .then(res => {
        console.log('handle submit', res)
        dispatch({ type: 'ADD_REVIEW', payload: res.data })
        setReviewText('')
      })
  }
  useEffect(() => {
    let yelp_id
    yelp_id = window.location.pathname.split('/business/')

    dispatch(fetchBusinessDetails(yelp_id[1]))
  }, [])
  return (
    <div>
      <h1>{business.name}</h1>
      <div>
        {business.reviews &&
          business.reviews.map(review => {
            if (review.text) {
              return (
                <div key={review.id}>
                  <span>
                    {(review.user && review.user.name) || review.user.username}
                  </span>
                  <p>{review.text}</p>
                </div>
              )
            }
          })}
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Review</label>
        <input onChange={e => handleInput(e)} value={reviewText} />
      </form>
    </div>
  )
}

export default Business

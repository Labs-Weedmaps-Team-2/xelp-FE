import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'
import { useForm } from 'hooks'
import Reviews from './components/Reviews'
import ReviewForm from './components/ReviewFrom'
const Business = () => {
  // var { location } = useRouter()
  const location = window.location
  const dispatch = useDispatch()

  const business = useSelector(({ singleBusiness }) => singleBusiness)

  useEffect(() => {
    let yelp_id
    yelp_id = window.location.pathname.split('/business/')

    dispatch(fetchBusinessDetails(yelp_id[1]))
  }, [])
  return (
    <div>
      <h1>{business.name}</h1>
      <div>{business.reviews && <Reviews reviews={business.reviews} />}</div>
      <ReviewForm />
    </div>
  )
}

export default Business

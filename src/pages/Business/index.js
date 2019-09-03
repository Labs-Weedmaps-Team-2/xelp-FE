import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'

const Business = () => {
  // var { location } = useRouter()
  const location = window.location
  const dispatch = useDispatch()
  const business = useSelector(({ singleBusiness }) => singleBusiness)
  console.log('business', business)
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
                    {(review.user && review.user.name) || review.user_id}
                  </span>
                  <p>{review.text}</p>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Business

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'

const Business = () => {
  // var { location } = useRouter()
  const location = window.location
  const dispatch = useDispatch()
  let business = useSelector(state => state.business.single)

  useEffect(
    location => {
      let yelp_id
      if (business) {
        yelp_id = business.id
      } else {
        yelp_id = window.location.pathname.split('/business/')
      }
      console.log(yelp_id)
      yelp_id = window.location.pathname.split('/business/')

      dispatch(fetchBusinessDetails(yelp_id[1]))
    },
    [location]
  )

  return <div>{business.name}</div>
}

export default Business

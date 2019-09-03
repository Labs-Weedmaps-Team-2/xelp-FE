import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRouter from 'hooks/useRouter'
import { fetchBusinessDetails } from 'actions/index'

const Business = () => {
  const { location } = useRouter()
  const dispatch = useDispatch()
  let business = useSelector(state => state.business.single)

  useEffect(() => {
    let yelp_id
    if (business.id) {
      yelp_id = business.id
    } else {
      yelp_id = location.pathname.split('/business')
      yelp_id.shift()
      let string = yelp_id[0]
      if (string.charAt(0) == '/') string = string.substr(1)
      yelp_id = string
    }

    dispatch(fetchBusinessDetails(yelp_id))
  }, [])
  console.log(typeof business.reviews)
  return (
    <div>
      <h1>{business.name}</h1>
      <div>{business.phone}</div>
      <div>{business.reviews}</div>
    </div>
  )
}

export default Business

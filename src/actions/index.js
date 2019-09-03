// Redux action creators
import * as types from './types'
import { api } from 'apis'

export const fetchUser = () => async dispatch => {
  dispatch({ type: types.FETCH_USER_REQUEST })
  try {
    const user = await api.get('/users/current_user')
    dispatch({ type: types.FETCH_USER_SUCCESS, payload: user.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: types.FETCH_USER_FAILURE })
  }
}

export const editUser = (id, profile) => async dispatch => {
  dispatch({ type: types.EDIT_USER_REQUEST })
  try {
    const user = await api.put(`/users/${id}`, profile)
    dispatch({ type: types.EDIT_USER_SUCCESS, payload: user.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: types.EDIT_USER_FAILURE })
  }
}

export const fetchBusiness = (term, location, offset = 0) => async dispatch => {
  dispatch({ type: types.FETCH_BUSINESS_REQUEST })
  try {
    const res = await api.get(
      `/search?location=${location}&term=${term}s&offset=${offset}`
    )
    console.log('DATA', res.data)
    dispatch({
      type: types.FETCH_BUSINESS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
    dispatch({ type: types.FETCH_BUSINESS_FAILURE })
  }
}

export const setSearch = (term, location) => {
  const search = { term, location }
  return { type: types.SET_SEARCH, payload: search }
}

export const fetchBusinessDetails = yelp_id => async dispatch => {
  dispatch({ type: types.FETCH_SINGLE_BUSSINESS_REQUEST })
  try {
    console.log(yelp_id)
    const res = await api.get(`/search/${yelp_id}`)
    dispatch({ type: types.FETCH_SINGLE_BUSSINESS_SUCCESS, payload: res.data })

    dispatch({ type: types.FETCH_BUSSINESS_REVIEWS_REQUEST })
    const review_res = await api.get(`/business/reviews/${yelp_id}`)
    console.log(review_res.data)
    dispatch({
      type: types.FETCH_BUSSINESS_REVIEWS_SUCCESS,
      payload: review_res.data,
    })
  } catch (err) {
    dispatch({ type: types.FETCH_SINGLE_BUSSINESS_FAILURE })
  }
}

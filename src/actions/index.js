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

export const uploadUserImage = (id, imageFile) => async dispatch => {
  dispatch({ type: types.UPLOAD_USER_IMAGE_REQUEST })
  try {
    const user = await api.put(`/users/${id}`, imageFile)
    dispatch({ type: types.UPLOAD_USER_IMAGE_SUCCESS, payload: user.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: types.UPLOAD_USER_IMAGE_FAILURE })
  }
}

export const fetchBusiness = (term, location, offset = 0) => async dispatch => {
  dispatch({ type: types.FETCH_BUSINESS_REQUEST })
  try {
    const res = await api.get(
      `/search?location=${location}&term=${term}&offset=${offset}`
    )
    dispatch({
      type: types.FETCH_BUSINESS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    console.error(err)
    dispatch({ type: types.FETCH_BUSINESS_FAILURE })
  }
}

export const resetBusiness = () => ({ type: types.RESET_BUSINESS })

export const setSearch = (term, location, offset = 0) => {
  const search = { term, location, offset }
  return { type: types.SET_SEARCH, payload: search }
}

export const fetchBusinessDetails = yelp_id => async dispatch => {
  dispatch({ type: types.FETCH_SINGLE_BUSINESS_REQUEST })
  try {
    const res = await api.get(`/search/${yelp_id}`)
    dispatch({ type: types.FETCH_SINGLE_BUSINESS_SUCCESS, payload: res.data })

    dispatch({ type: types.FETCH_BUSINESS_REVIEWS_REQUEST })
    const review_res = await api.get(`/business/${yelp_id}/reviews`)
    dispatch({
      type: types.FETCH_BUSINESS_REVIEWS_SUCCESS,
      payload: review_res.data,
    })
  } catch (err) {
    dispatch({ type: types.FETCH_SINGLE_BUSINESS_FAILURE })
  }
}

export const resetSingleBusiness = () => ({ type: types.RESET_SINGLE_BUSINESS })

export const createBusiness = formData => async dispatch => {
  dispatch({ type: types.CREATE_BUSINESS_REQUEST })
  try {
    const res = await api.post('/business', { business: formData })
    console.log('response after creating a new business', res)
    if (res.status === 201) {
      dispatch({ type: types.CREATE_BUSINESS_SUCCESS })
    }
  } catch (err) {
    console.log(err)
    dispatch({ type: types.CREATE_BUSINESS_FAILURE, payload: err })
  }
}
export const setMap = (center, zoom, hasMoved) => ({
  type: types.SET_MAP,
  payload: { center, zoom, hasMoved },
})

export const setYelpUpdate = () => ({
  type: types.SET_YELP_UPDATE,
})

export const setMapUpdate = () => ({
  type: types.SET_MAP_UPDATE,
})

export const fetchBusinessGallery = yelp_id => async dispatch => {
  dispatch({ type: types.FETCH_BUSINESS_GALLERY_REQUEST })
  try {
    const res = await api.get(`/business/${yelp_id}/gallery`)
    dispatch({ type: types.FETCH_BUSINESS_GALLERY_SUCCESS, payload: res.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: types.FETCH_BUSINESS_GALLERY_FAILURE })
  }
}

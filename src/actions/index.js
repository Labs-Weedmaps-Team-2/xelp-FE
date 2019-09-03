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

export const fetchBusinesses = (location, term, offset) => async dispatch => {
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

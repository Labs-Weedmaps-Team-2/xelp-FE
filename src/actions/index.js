// Redux action creators
import * as types from './types'
import { api } from 'apis'
import axios from 'axios'

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
  dispatch({ type: types.FETCH_BUSINESSES_REQUEST })
  try {
    const businesses = await axios.get(
      `http://localhost:3000/api/v1/search?location=${location}&term=${term}s&offset=${offset}`
    )
    console.log('HELLO')
    console.log(JSON.parse(businesses.data.data))
    dispatch({ type: types.FETCH_BUSINESSES_SUCCESS })
  } catch (err) {
    console.error(err)
    dispatch({ type: types.FETCH_BUSINESSES_FAILURE })
  }
}

// Redux action creators
import * as types from './types'
import { api } from 'apis'

export const fetchUser = () => async dispatch => {
  dispatch({ type: types.USER_REQUEST })
  try {
    const user = await api.get('/users/current_user')
    dispatch({ type: types.USER_SUCCESS, payload: user.data })
  } catch (err) {
    console.log(err)
    dispatch({ type: types.USER_FAILURE })
  }
}

import * as types from 'actions/types'
const initialState = {
  username: '',
  email: '',
  photo: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return action.payload
    case types.EDIT_USER_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

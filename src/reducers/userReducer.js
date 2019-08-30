import * as types from 'actions/types'
const initialState = {
  username: '',
  email: '',
  photo: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}

import * as types from 'actions/types'
const initialState = {
  username: '',
  email: '',
  photo: '',
}

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BUSINESS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

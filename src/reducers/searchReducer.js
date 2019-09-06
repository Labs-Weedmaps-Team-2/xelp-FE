import * as types from 'actions/types'
const initialState = {
  location: 'Los Angeles, CA',
  term: '',
  offset: 0,
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return action.payload
    case types.CLEAR_SEARCH:
      return initialState
    default:
      return state
  }
}

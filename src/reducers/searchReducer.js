import * as types from 'actions/types'
const initialState = {
  location: 'los angeles, ca',
  term: 'tacos',
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

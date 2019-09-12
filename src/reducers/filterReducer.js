import * as types from 'actions/types'
const initialState = {
  location: '',
  term: '',
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_PREV_SEARCH:
      return action.payload
    case types.RESET_PREV_SEARCH:
      return initialState
    default:
      return state
  }
}

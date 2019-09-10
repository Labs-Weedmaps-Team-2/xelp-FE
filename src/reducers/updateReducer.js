import * as types from 'actions/types'
const initialState = true

export const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_YELP_UPDATE:
      return true
    case types.SET_MAP_UPDATE:
      return false
    default:
      return state
  }
}

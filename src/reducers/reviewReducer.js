import * as types from 'actions/types'
const initialState = {
  id:null, 
  text:"",
  user: {},
  rating: 1,
  business: {}
}

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REVIEW:
      return { ...state, ...action.payload }
    case types.RESET_REVIEW:
      return initialState
    default:
      return state
  }
}
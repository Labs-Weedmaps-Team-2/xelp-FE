import * as types from 'actions/types'
const initialState = {
  id:null, 
  text:"",
  user: {},
  rating: null,
  business: {}
}

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REVIEW:
      return { ...state, ...action.payload }
    case types.CLEAR_REVIEW:
      return initialState
    default:
      return state
  }
}
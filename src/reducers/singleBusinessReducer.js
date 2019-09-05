import * as types from 'actions/types'
const initialState = {
  reviews: [],
  photos: [],
  categories: [],
}

export const singleBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_SINGLE:
      return { ...state, single: action.payload }
    case types.FETCH_SINGLE_BUSSINESS_SUCCESS:
      return { ...action.payload }
    case types.FETCH_BUSSINESS_REVIEWS_SUCCESS:
      return { ...state, reviews: action.payload }
    default:
      return state
  }
}

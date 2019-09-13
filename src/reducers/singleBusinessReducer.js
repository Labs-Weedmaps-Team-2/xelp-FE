import * as types from 'actions/types'
const initialState = {
  reviews: [],
  photos: [],
  categories: [],
}

export const singleBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_SINGLE:
      return { ...state, ...action.payload }
    case types.FETCH_SINGLE_BUSINESS_SUCCESS:
      return { ...action.payload }
    case types.FETCH_BUSINESS_REVIEWS_SUCCESS:
      return { ...state, reviews: action.payload }
    case types.ADD_REVIEW:
      return { ...state, reviews: [...state.reviews, action.payload] }
    case types.FETCH_BUSINESS_GALLERY_SUCCESS:
      return { ...state, photos: action.payload }
    case types.RESET_SINGLE_BUSINESS:
      return initialState
    default:
      return state
  }
}

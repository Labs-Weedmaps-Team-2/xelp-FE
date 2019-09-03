import * as types from 'actions/types'

// businesses => Array of businesses
// total => Total number of businesses in query (integer)
// region => center : {longitude, latitude}

const initialState = {
  businesses: [],
  total: '',
  region: {},
  single: {},
}

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BUSINESS_SUCCESS:
      return action.payload
    // case types.POPULATE_SINGLE:
    //   return { ...state, single: action.payload }
    // case types.FETCH_SINGLE_BUSSINESS_SUCCESS:
    //   return { ...state, single: action.payload }
    // case types.FETCH_BUSSINESS_REVIEWS_SUCCESS:
    //   const newState = { ...state }
    //   newState['single']['reviews'] = action.payload
    //   newState.single.review_count = action.payload.length
    //   return newState
    default:
      return state
  }
}

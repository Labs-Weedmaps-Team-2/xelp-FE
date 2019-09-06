import * as types from 'actions/types'

// businesses => Array of businesses
// total => Total number of businesses in query (integer)
// region => center : {longitude, latitude}

const initialState = {
  businesses: [],
  total: '',
  region: {
    center: [],
  },
  loading: false,
  error: null,
}

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BUSINESS_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case types.FETCH_BUSINESS_REQUEST:
      return { ...state, loading: true }
    case types.RESET_BUSINESS:
      return initialState
    default:
      return state
  }
}

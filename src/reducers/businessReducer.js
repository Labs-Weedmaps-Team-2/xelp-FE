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
}

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BUSINESS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

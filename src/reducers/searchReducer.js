import * as types from 'actions/types'
const initialState = {
  location: 'Los Angeles, CA',
  term: '',
  offset: 0,
  price: '',
  open_now: false,
  categories: 'nightlife, arts',
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return { ...state, ...action.payload }
    case types.CLEAR_SEARCH:
      return initialState
    case types.SET_OPEN:
      return { ...state, open_now: action.payload }
    case types.SET_PRICE:
      return { ...state, price: action.payload }
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    default:
      return state
  }
}

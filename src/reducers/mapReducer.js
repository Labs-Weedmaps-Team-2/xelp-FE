import * as types from 'actions/types'

const initialState = {
  center: { lat: '', lng: '' },
  zoom: 12,
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MAP:
      return action.payload
    default:
      return state
  }
}

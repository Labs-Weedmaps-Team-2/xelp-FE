import * as types from 'actions/types'
const initialState = {
  id: '',
  username: '',
  email: '',
  photo: '',
  avatar: '',
  loading: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return { ...state, loading: true }
    case types.FETCH_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case types.EDIT_USER_REQUEST:
      return { ...state, loading: true }
    case types.EDIT_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case types.UPLOAD_USER_IMAGE_REQUEST:
      return { ...state, loading: true }
    case types.UPLOAD_USER_IMAGE_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    default:
      return state
  }
}

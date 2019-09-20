import * as types from 'actions/types'
const initialState = {
  id: '',
  username: '',
  email: '',
  photo: '',
  avatar: '',
  city: '',
  state: '',
  loadingAuth: false,
  uploadingPhoto: false,
  updatingDetails: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return { ...state, loadingAuth: true }
    case types.FETCH_USER_SUCCESS:
      return { ...state, ...action.payload, loadingAuth: false }
    case types.EDIT_USER_REQUEST:
      return { ...state, updatingDetails: true }
    case types.EDIT_USER_SUCCESS:
      return { ...state, ...action.payload, updatingDetails: false }
    case types.UPLOAD_USER_IMAGE_REQUEST:
      return { ...state, uploadingPhoto: true }
    case types.UPLOAD_USER_IMAGE_SUCCESS:
      return { ...state, ...action.payload, uploadingPhoto: false }
    case types.DELETE_ACCOUNT_SUCCESS:
      return initialState
    default:
      return state
  }
}

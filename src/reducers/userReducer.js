import * as types from 'actions/types'
const initialState = {
  id: '',
  username: '',
  email: '',
  photo: '',
  avatar: '',
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return { ...state, ...action.payload }
    case types.EDIT_USER_SUCCESS:
      return { ...state, ...action.payload }
    case types.UPLOAD_USER_IMAGE_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

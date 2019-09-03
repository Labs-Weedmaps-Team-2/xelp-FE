import { combineReducers } from 'redux'
import { userReducer as user } from './userReducer'
import { businessReducer as business } from './businessReducer'

export default combineReducers({
  user,
  business,
})

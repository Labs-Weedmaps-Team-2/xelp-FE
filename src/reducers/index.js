import { combineReducers } from 'reducers/redux'
import { userReducer as user } from './userReducer'
export default combineReducers({
  user,
})

import { combineReducers } from 'redux'
import { userReducer as user } from './userReducer'
import { businessReducer as business } from './businessReducer'
import { searchReducer as search } from './searchReducer'

export default combineReducers({
  user,
  business,
  search,
})

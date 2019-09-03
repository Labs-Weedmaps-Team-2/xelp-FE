import { combineReducers } from 'redux'
import { userReducer as user } from './userReducer'
import { businessReducer as business } from './businessReducer'
import { searchReducer as search } from './searchReducer'
import { singleBusinessReducer as singleBusiness } from './singleBusinessReducer'
export default combineReducers({
  user,
  business,
  search,
  singleBusiness,
})

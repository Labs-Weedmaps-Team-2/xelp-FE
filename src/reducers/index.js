import { combineReducers } from 'redux'
import { userReducer as user } from './userReducer'
import { businessReducer as business } from './businessReducer'
import { searchReducer as search } from './searchReducer'
import { singleBusinessReducer as singleBusiness } from './singleBusinessReducer'
import { mapReducer as map } from './mapReducer'
import { updateReducer as update } from './updateReducer'
export default combineReducers({
  user,
  business,
  search,
  singleBusiness,
  map,
  update,
})

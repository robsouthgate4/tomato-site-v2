import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import reviews from './reviews'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  counter,
  reviews,
  user
})

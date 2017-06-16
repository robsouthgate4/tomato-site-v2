import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import reviews from './reviews'
import auth from './auth'

export default combineReducers({
  routing: routerReducer,
  counter,
  reviews,
  auth
})

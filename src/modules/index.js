import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import reviews from './reviews'

export default combineReducers({
  routing: routerReducer,
  counter,
  reviews
})

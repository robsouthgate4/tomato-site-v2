import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const persistedState = loadState()

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
  persistedState
)

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

export default store

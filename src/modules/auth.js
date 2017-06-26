import _ from 'lodash'
import { getItem, saveItem } from '../localStorage'
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST'
export const SESSION_VALID = 'user/SESSION_VALID'
export const SESSION_INVALID = 'user/SESSION_INVALID'


const initialState = { // TODO: finish user obj structure
    isLoggedIn: false,
    isLoggingIn: false,
    userId: null,
    token: null
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case LOGIN_REQUEST:
        return _.assign({}, state, {
            isLoggingIn: true
        })
    break
    case LOGIN_SUCCESS:
        return _.assign({}, state, {
            isLoggedIn: true,
            isLoggingIn: false,
            userId: action.userId,
            token: action.token
        })
    case LOGIN_FAIL:
        return _.assign({}, state, {
            isLoggedIn: false,
            isLoggingIn: false
        })
    case SESSION_VALID:
        return _.assign({}, state, {
            isLoggedIn: true,
            isLoggingIn: false,
            userId: action.userId,
            token: action.token
        })
    case SESSION_INVALID:
        return _.assign({}, state, {
            isLoggedIn: false,
            isLoggingIn: false,
            userId: null,
            token: null
        })


    default:
      return state
  }
}

export const validateSession = (token) => {
    return dispatch => {
        return setTimeout(() => { // simulate call to check jwt is valid
            if ( token ) {
                localStorage.setItem('jwt', token)
                dispatch({
                    type: SESSION_VALID,
                    userId: '9aa8c295-a712-4dbc-8683-f6a6881ca131'
                })
            }
            else {
                localStorage.removeItem('jwt')
            }
        }, 2000)
    }
}

// Fake login async example
export const login = (userData) => {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        })
        return setTimeout(() => {// Fake success callback
            //Simulate fail or success
            if ( userData.password === 'password' ) {
                localStorage.setItem('jwt', 'faketoken1234566')
                dispatch({
                    type: LOGIN_SUCCESS,
                    userId: '9aa8c295-a712-4dbc-8683-f6a6881ca131'
                })
            } else {
                dispatch({
                    type: LOGIN_FAIL
                })
            }

        }, 1000)
    }
}

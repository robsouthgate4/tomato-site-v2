import _ from 'lodash'
import { getItem, saveItem } from '../localStorage'
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST'


const initialState = { // TODO: finish user obj structure
    isLoggedIn: getItem('jwt') ? true : false,
    isLoggingIn: false,
    userId: null
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
            userId: action.userId
        })
    case LOGIN_FAIL:
        return _.assign({}, state, {
            isLoggedIn: false,
            isLoggingIn: false
        })
    default:
      return state
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
            if (userData.password === 'password' ) {
                saveItem('jwt', '1234')
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

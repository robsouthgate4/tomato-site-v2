import _ from 'lodash'
import { getUsers } from '../services/api'

export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST'
export const FETCH_USERS_REQUEST = 'user/FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'user/FETCH_USERS_SUCCESS'

const initialState = { // TODO: finish user obj structure
    isLoggedIn: false,
    isLoggingIn: false,
    isFetchingUsers: false,
    id: null,
    users: {

    }
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
            id: action.user.id,
            firstname: action.user.firstname,
            lastname: action.user.lastname
        })
    case FETCH_USERS_REQUEST:
        return _.assign({}, state, {
            isFetchingUsers: true
        })
    break
    case FETCH_USERS_SUCCESS:
        return _.assign({}, state, {
            isFetchingUsers: false,
            users: action.users
        })
    default:
      return state
  }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch({
            type: FETCH_USERS_REQUEST
        })
        return getUsers()
            .then((users) => {
                dispatch(fetchUsersSuccess(users))
            })
    }
}

const fetchUsersSuccess = (users) => {
    return{
            type: FETCH_USERS_SUCCESS,
            users
    }
}

// Fake login async example
export const login = (userData) => {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        })
        return setTimeout(() => {
            dispatch({
                type: LOGIN_SUCCESS,
                user: userData
            })
        }, 1000)
    }

}

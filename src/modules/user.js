import _ from 'lodash'

export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'
export const LOGIN_REQUEST = 'user/LOGIN_REQUEST'

const initialState = { // TODO: finish user obj structure
    isLoggedIn: false,
    user: {
        id: null
    },
    errors: {

    }
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true
        }
    default:
      return state
  }
}

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

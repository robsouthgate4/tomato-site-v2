const LOAD   = 'LOAD';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';
// Actions

const initialState = {
    reviews:[]
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'CREATE_REVIEW':
        return state
        break
    case 'UPDATE_REVIEW':
        return state
        break
    case 'DELETE_REVIEW':
        return state
        break
    default:
      return state
  }
}

// Action Creators
export function loadReviews() {
  return { type: LOAD };
}

export function createReviews(review) {
  return { type: CREATE, review };
}

export function updateReview(review) {
  return { type: UPDATE, review };
}

export function removeWidget(review) {
  return { type: REMOVE, review };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getReview () {
  //return dispatch => get('/widget').then(widget => dispatch(setWidget(widget)))
}

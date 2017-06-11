import data from '../db.json' // TODO: replace with api data

const reviews = data.entities.reviews;

const initialState = {
  ...reviews
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
        return state
        break
    case 'EDIT_REVIEW':
        return state
        break
    case 'DELETE_REVIEW':
        return state
        break
    default:
      return state
  }
}

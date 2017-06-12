

const initialState = {

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

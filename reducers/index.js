import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

function entries(state = {}, action ) {
  switch(action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...acion.entries,
      }
    case ADD_ENTRY:
      return {
        ...state,
        ...aciton.entry
      }
    default:
      return state
  }
}
export default entries

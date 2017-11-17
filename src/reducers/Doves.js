import {
  FETCH_DOVES,
  ADD_DOVES,
  SEARCH_DOVES,
  REMOVE_DOVES,
  POST_DATA_FAIL,
  POST_DATA_SUCCES
} from '../actions'

const INITIAL_STATE = {
  doves: [],
  recently_added: [],
  query: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_DATA_SUCCES:
      return { ...state, doves: action.payload.data }

    case POST_DATA_FAIL:
      return { ...state, error: action.payload }

    case FETCH_DOVES:
      return { ...state, doves: action.payload.data.reverse() }

    case ADD_DOVES:
      return { ...state, recently_added: action.payload.data }

    case SEARCH_DOVES:
      return { ...state, doves: action.payload.data }

    case REMOVE_DOVES:
      return { ...state, recently_deleted: action.payload.data }

    default:
      return state
  }
}

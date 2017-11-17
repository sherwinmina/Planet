import axios from 'axios'

export const FETCH_DOVES = 'FETCH_DOVES'
export const SEARCH_DOVES = 'SEARCH_DOVES'
export const ADD_DOVES = 'ADD_DOVES'
export const REMOVE_DOVES = 'REMOVE_DOVES'
export const POST_DATA_FAIL = 'POST_DATA_FAIL'
export const POST_DATA_SUCCES = 'POST_DATA_SUCCES'

export function fetchDoves() {
  const request = axios.get('http://localhost:3000/doves')

  return {
    type: FETCH_DOVES,
    payload: request
  }
}

export function addDoves(doves) {
  const request = axios.post('http://localhost:3000/doves', doves)

  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: ADD_DOVES, payload: data })
      })
      .then(fetchDoves())
  }
}

export function postDataFail(error) {
  return {
    type: POST_DATA_FAIL,
    payload: error
  }
}

export function postDataSuccess(data) {
  return {
    type: POST_DATA_SUCCES,
    payload: data
  }
}

export function searchDoves(query) {
  console.log(query)
  const term = query.term
  const property = query.property

  const request = axios.get(`http://localhost:3000/doves?${property}=${term}`)

  return {
    type: SEARCH_DOVES,
    payload: request
  }
}

export function removeDoves(id) {
  const request = axios.delete(`http://localhost:3000/doves/${id}`)

  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: REMOVE_DOVES, payload: data })
      })
      .then(dispatch(fetchDoves()))
  }
}

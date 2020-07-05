import { combineReducers } from 'redux'

import { authReducer } from '../features/auth/reducers/auth_reducer'

const initialState = {
  todos: []
}

function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case 'Add':
      const tempArray = [...state.todos]
      tempArray.push('a')
      return {
        ...state,
        todos: tempArray
      }
    default:
      return state
  }
}

export default combineReducers({
  dummyReducer: dummyReducer,
  authReducer
})


import { ActionType } from '../../../utils/constan'

const initialState = {
    isAuthenticated: false,
    token: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_AUTH:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case ActionType.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }

        default:
            return state
    }
}

import { LOGIN, LOGOUT } from './types'
import { combineReducers } from 'redux'

const defaultState = {
    isLogged: false,
    current: {}
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN: {
            return { ...state, isLogged: true, current: action.current }
        }
        case LOGOUT: {
            return defaultState
        }
        default:
            return state
    }
}

const reducer = combineReducers({ user })

export default reducer
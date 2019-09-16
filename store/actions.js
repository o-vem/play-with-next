import { LOGIN, LOGOUT } from './types'

const login = current => ({
    type: LOGIN,
    current
})

const logout = () => ({
    type: LOGOUT,
})

export {
    login,
    logout
}
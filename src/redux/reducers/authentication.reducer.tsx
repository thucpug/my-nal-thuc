import { userConstants } from '../../constant'

let user = JSON.parse(localStorage.getItem('user') || '{}')
const initialState = user ? { loggedIn: true, user } : {}

export function authentication(state = initialState, action: { type: any; user: any }) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}

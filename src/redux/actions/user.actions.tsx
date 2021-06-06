import { userConstants } from '../../constant'
import { userService } from '../../services'
import { alertActions } from '.'
import { history } from '../../authentication'

export const userActions = {
  login,
  logout,
  register,
  getAll,
}

function login(username: string, password: string, from: string) {
  return (dispatch: (arg0: { type: string; user?: any; error?: any; message?: any }) => void) => {
    dispatch(request({ username }))

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user))
        history.push(from)
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user: { username: any }) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user: any) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error: any) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function register(user: any) {
  return (dispatch: (arg0: { type: string; user?: any; message?: any; error?: any }) => void) => {
    dispatch(request(user))

    userService.register(user).then(
      (user) => {
        dispatch(success(''))
        history.push('/login')
        dispatch(alertActions.success('Registration successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user: any) {
    return { type: userConstants.REGISTER_REQUEST, user }
  }
  function success(user: any) {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }
  function failure(error: any) {
    return { type: userConstants.REGISTER_FAILURE, error }
  }
}

function getAll() {
  return (dispatch: (arg0: { type: string; users?: any; error?: any }) => void) => {
    dispatch(request())

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    )
  }

  function request() {
    return { type: userConstants.GETALL_REQUEST }
  }
  function success(users: any) {
    return { type: userConstants.GETALL_SUCCESS, users }
  }
  function failure(error: any) {
    return { type: userConstants.GETALL_FAILURE, error }
  }
}

function request(id: any) {
  return { type: userConstants.DELETE_REQUEST, id }
}
function success(id: any) {
  return { type: userConstants.DELETE_SUCCESS, id }
}
function failure(id: any, error: any) {
  return { type: userConstants.DELETE_FAILURE, id, error }
}
